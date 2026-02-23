"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const repositories_module_1 = require("./infrastructure/repositories/repositories.module");
const category_usecases_proxy_module_1 = require("./infrastructure/usecases-proxy/category-usecases-proxy.module");
const zone_usecases_proxy_module_1 = require("./infrastructure/usecases-proxy/zone-usecases-proxy.module");
const auth_usecases_proxy_module_1 = require("./infrastructure/usecases-proxy/auth-usecases-proxy.module");
const zone_controller_1 = require("./infrastructure/controllers/zone/zone.controller");
const auth_controller_1 = require("./infrastructure/controllers/auth/auth.controller");
const category_entity_1 = require("./infrastructure/entities/category.entity");
const zone_entity_1 = require("./infrastructure/entities/zone.entity");
const user_entity_1 = require("./infrastructure/entities/user.entity");
const category_resolver_1 = require("./infrastructure/resolvers/category/category.resolver");
const zone_resolver_1 = require("./infrastructure/resolvers/zone/zone.resolver");
const auth_resolver_1 = require("./infrastructure/resolvers/auth/auth.resolver");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                playground: true,
                path: '/api-gateway',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 5435,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [category_entity_1.CategoryEntity, zone_entity_1.ZoneEntity, user_entity_1.UserEntity],
                synchronize: true,
                autoLoadEntities: true,
                logging: true,
            }),
            repositories_module_1.RepositoriesModule,
            category_usecases_proxy_module_1.CategoryUsecasesProxyModule.register(),
            zone_usecases_proxy_module_1.ZoneUsecasesProxyModule.register(),
            auth_usecases_proxy_module_1.AuthUsecasesProxyModule.register(),
        ],
        controllers: [
            zone_controller_1.ZoneController,
            auth_controller_1.AuthController,
        ],
        providers: [category_resolver_1.CategoryResolver, zone_resolver_1.ZoneResolver, auth_resolver_1.AuthResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map