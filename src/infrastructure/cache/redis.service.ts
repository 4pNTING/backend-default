import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly client: Redis;
  private readonly logger = new Logger(RedisService.name);
  private readonly defaultTtl: number;
  private isConnected = false;

  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>('REDIS_HOST');
    const port = this.configService.get<number>('REDIS_PORT');
    const password = this.configService.get<string>('REDIS_PASSWORD');
    this.defaultTtl = this.configService.get<number>('REDIS_CACHE_TTL');

    this.client = new Redis({
      host,
      port,
      password,
      retryStrategy: (times: number) => {
        if (times > 3) {
          this.logger.warn(`Redis retry limit reached (${times} attempts). Giving up reconnect.`);
          return null; // หยุด retry → graceful degradation
        }
        return Math.min(times * 500, 2000); // retry delay: 500ms, 1000ms, 1500ms
      },
      maxRetriesPerRequest: 1, // ไม่ให้ retry request นานเกินไป
      enableReadyCheck: true,
      lazyConnect: false,
    });

    this.client.on('connect', () => {
      this.isConnected = true;
      this.logger.log(`✅ Redis connected successfully (${host}:${port})`);
    });

    this.client.on('error', (err) => {
      this.isConnected = false;
      this.logger.warn(`⚠️ Redis connection error: ${err.message} — falling back to database`);
    });

    this.client.on('close', () => {
      this.isConnected = false;
      this.logger.warn('⚠️ Redis connection closed');
    });
  }

  /**
   * อ่านข้อมูลจาก cache
   * @returns ข้อมูลที่ parse จาก JSON แล้ว หรือ null ถ้าไม่มี/Redis ล่ม
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      if (!this.isConnected) return null;
      const data = await this.client.get(key);
      if (!data) return null;
      this.logger.debug(`Cache HIT: ${key}`);
      return JSON.parse(data) as T;
    } catch (error) {
      this.logger.warn(`Cache GET failed for key "${key}": ${(error as Error).message}`);
      return null; // Graceful degradation
    }
  }

  /**
   * เขียนข้อมูลลง cache พร้อม TTL
   * @param ttlSeconds - ระยะเวลา cache (วินาที) ถ้าไม่ระบุใช้ค่า default จาก .env
   */
  async set(key: string, value: any, ttlSeconds?: number): Promise<void> {
    try {
      if (!this.isConnected) return;
      const ttl = ttlSeconds ?? this.defaultTtl ?? 300;
      await this.client.set(key, JSON.stringify(value), 'EX', ttl);
      this.logger.debug(`Cache SET: ${key} (TTL: ${ttl}s)`);
    } catch (error) {
      this.logger.warn(`Cache SET failed for key "${key}": ${(error as Error).message}`);
      // Graceful degradation — ไม่ throw
    }
  }

  /**
   * ลบ cache key เดียว
   */
  async del(key: string): Promise<void> {
    try {
      if (!this.isConnected) return;
      await this.client.del(key);
      this.logger.debug(`Cache DEL: ${key}`);
    } catch (error) {
      this.logger.warn(`Cache DEL failed for key "${key}": ${(error as Error).message}`);
    }
  }

  /**
   * ลบ cache หลาย key ตาม pattern (ใช้ SCAN ไม่ใช่ KEYS เพื่อ production-safety)
   * @example delByPattern('currency:*') → ลบ currency:list, currency:id:xxx ทั้งหมด
   */
  async delByPattern(pattern: string): Promise<void> {
    try {
      if (!this.isConnected) return;
      let cursor = '0';
      let deletedCount = 0;

      do {
        const [nextCursor, keys] = await this.client.scan(
          cursor,
          'MATCH',
          pattern,
          'COUNT',
          100,
        );
        cursor = nextCursor;

        if (keys.length > 0) {
          await this.client.del(...keys);
          deletedCount += keys.length;
        }
      } while (cursor !== '0');

      if (deletedCount > 0) {
        this.logger.debug(`Cache DEL pattern "${pattern}": ${deletedCount} keys removed`);
      }
    } catch (error) {
      this.logger.warn(`Cache DEL pattern failed for "${pattern}": ${(error as Error).message}`);
    }
  }

  /**
   * ตรวจสอบสถานะ Redis
   */
  async isHealthy(): Promise<boolean> {
    try {
      const pong = await this.client.ping();
      return pong === 'PONG';
    } catch {
      return false;
    }
  }

  /**
   * Lifecycle hook — disconnect เมื่อ NestJS shutdown
   */
  async onModuleDestroy(): Promise<void> {
    try {
      await this.client.quit();
      this.logger.log('Redis disconnected gracefully');
    } catch (error) {
      this.logger.warn(`Redis disconnect error: ${(error as Error).message}`);
    }
  }
}
