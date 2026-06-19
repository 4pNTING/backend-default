"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RedisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ioredis_1 = __importDefault(require("ioredis"));
let RedisService = RedisService_1 = class RedisService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(RedisService_1.name);
        this.isConnected = false;
        const host = this.configService.get('REDIS_HOST');
        const port = this.configService.get('REDIS_PORT');
        const password = this.configService.get('REDIS_PASSWORD');
        this.defaultTtl = this.configService.get('REDIS_CACHE_TTL');
        this.client = new ioredis_1.default({
            host,
            port,
            password,
            retryStrategy: (times) => {
                if (times > 3) {
                    this.logger.warn(`Redis retry limit reached (${times} attempts). Giving up reconnect.`);
                    return null;
                }
                return Math.min(times * 500, 2000);
            },
            maxRetriesPerRequest: 1,
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
    async get(key) {
        try {
            if (!this.isConnected)
                return null;
            const data = await this.client.get(key);
            if (!data)
                return null;
            this.logger.debug(`Cache HIT: ${key}`);
            return JSON.parse(data);
        }
        catch (error) {
            this.logger.warn(`Cache GET failed for key "${key}": ${error.message}`);
            return null;
        }
    }
    async set(key, value, ttlSeconds) {
        try {
            if (!this.isConnected)
                return;
            const ttl = ttlSeconds ?? this.defaultTtl ?? 300;
            await this.client.set(key, JSON.stringify(value), 'EX', ttl);
            this.logger.debug(`Cache SET: ${key} (TTL: ${ttl}s)`);
        }
        catch (error) {
            this.logger.warn(`Cache SET failed for key "${key}": ${error.message}`);
        }
    }
    async del(key) {
        try {
            if (!this.isConnected)
                return;
            await this.client.del(key);
            this.logger.debug(`Cache DEL: ${key}`);
        }
        catch (error) {
            this.logger.warn(`Cache DEL failed for key "${key}": ${error.message}`);
        }
    }
    async delByPattern(pattern) {
        try {
            if (!this.isConnected)
                return;
            let cursor = '0';
            let deletedCount = 0;
            do {
                const [nextCursor, keys] = await this.client.scan(cursor, 'MATCH', pattern, 'COUNT', 100);
                cursor = nextCursor;
                if (keys.length > 0) {
                    await this.client.del(...keys);
                    deletedCount += keys.length;
                }
            } while (cursor !== '0');
            if (deletedCount > 0) {
                this.logger.debug(`Cache DEL pattern "${pattern}": ${deletedCount} keys removed`);
            }
        }
        catch (error) {
            this.logger.warn(`Cache DEL pattern failed for "${pattern}": ${error.message}`);
        }
    }
    async isHealthy() {
        try {
            const pong = await this.client.ping();
            return pong === 'PONG';
        }
        catch {
            return false;
        }
    }
    async onModuleDestroy() {
        try {
            await this.client.quit();
            this.logger.log('Redis disconnected gracefully');
        }
        catch (error) {
            this.logger.warn(`Redis disconnect error: ${error.message}`);
        }
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = RedisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RedisService);
//# sourceMappingURL=redis.service.js.map