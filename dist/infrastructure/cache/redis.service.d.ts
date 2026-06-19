import { OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class RedisService implements OnModuleDestroy {
    private readonly configService;
    private readonly client;
    private readonly logger;
    private readonly defaultTtl;
    private isConnected;
    constructor(configService: ConfigService);
    get<T>(key: string): Promise<T | null>;
    set(key: string, value: any, ttlSeconds?: number): Promise<void>;
    del(key: string): Promise<void>;
    delByPattern(pattern: string): Promise<void>;
    isHealthy(): Promise<boolean>;
    onModuleDestroy(): Promise<void>;
}
