import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

// Import Modules ของเรา
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { CategoryUsecasesProxyModule } from './infrastructure/usecases-proxy/category-usecases-proxy.module';
import { ZoneUsecasesProxyModule } from './infrastructure/usecases-proxy/zone-usecases-proxy.module';
import { AuthUsecasesProxyModule } from './infrastructure/usecases-proxy/auth-usecases-proxy.module';

import { CategoryController } from './infrastructure/controllers/category/category.controller';
import { ZoneController } from './infrastructure/controllers/zone/zone.controller';
import { AuthController } from './infrastructure/controllers/auth/auth.controller';
import { CurrencyController } from './infrastructure/controllers/currency/currency.controller';

import { CategoryEntity } from './infrastructure/entities/category.entity';
import { ZoneEntity } from './infrastructure/entities/zone.entity';
import { UserEntity } from './infrastructure/entities/user.entity';
import { CurrencyEntity } from './infrastructure/entities/currency.entity';

import { CategoryResolver } from './infrastructure/resolvers/category/category.resolver';
import { ZoneResolver } from './infrastructure/resolvers/zone/zone.resolver';
import { AuthResolver } from './infrastructure/resolvers/auth/auth.resolver';
import { CurrencyResolver } from './infrastructure/resolvers/currency/currency.resolver';
import { CurrencyUsecasesProxyModule } from './infrastructure/usecases-proxy/currency-usecases-proxy.module';
import { JwtStrategy } from './infrastructure/common/jwt.strategy';
import { RedisModule } from './infrastructure/cache/redis.module';

@Module({
    imports: [
        // 1. Config Environment (อ่านไฟล์ .env)
        ConfigModule.forRoot({ isGlobal: true }),

        // 2. Redis Cache (Global Module)
        RedisModule,

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: false,
            playground: true,
            path: '/api-gateway',
            formatError: (error) => {
                return {
                    message: error.message,
                };
            },
        }),

        // 2. Database Connection (Postgres)
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST') || 'localhost',
                port: configService.get<number>('DB_PORT') || 5435,
                username: configService.get<string>('DB_USER'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_NAME'),
                entities: [
                    CategoryEntity,
                    ZoneEntity,
                    UserEntity,
                    CurrencyEntity
                ],
                synchronize: true,
                autoLoadEntities: true,
                logging: false,
            }),
        }),

        // 3. Register Modules
        RepositoriesModule,
        CategoryUsecasesProxyModule.register(), // Load Dynamic Module
        ZoneUsecasesProxyModule.register(),
        AuthUsecasesProxyModule.register(),
        CurrencyUsecasesProxyModule.register(),
    ],
    controllers: [
        // 4. Register Controllers
        CategoryController,
        ZoneController,
        AuthController,
        CurrencyController,
    ],
    providers: [
        CategoryResolver,
        ZoneResolver,
        AuthResolver,
        CurrencyResolver,
        JwtStrategy
    ],
})
export class AppModule { }
