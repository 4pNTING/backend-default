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

// import { CategoryController } from './infrastructure/controllers/category/category.controller';
import { ZoneController } from './infrastructure/controllers/zone/zone.controller';
import { AuthController } from './infrastructure/controllers/auth/auth.controller';

import { CategoryEntity } from './infrastructure/entities/category.entity';
import { ZoneEntity } from './infrastructure/entities/zone.entity';
import { UserEntity } from './infrastructure/entities/user.entity';

import { CategoryResolver } from './infrastructure/resolvers/category/category.resolver';
import { ZoneResolver } from './infrastructure/resolvers/zone/zone.resolver';
import { AuthResolver } from './infrastructure/resolvers/auth/auth.resolver';
import { JwtStrategy } from './infrastructure/common/jwt.strategy';

@Module({
    imports: [
        // 1. Config Environment (อ่านไฟล์ .env)
        ConfigModule.forRoot({ isGlobal: true }),

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: false,
            playground: true,
            path: '/api-gateway',
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
                    UserEntity
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
    ],
    controllers: [
        // 4. Register Controllers
        // CategoryController,
        ZoneController,
        AuthController,
    ],
    providers: [
        CategoryResolver,
        ZoneResolver,
        AuthResolver,
        JwtStrategy
    ],
})
export class AppModule { }
