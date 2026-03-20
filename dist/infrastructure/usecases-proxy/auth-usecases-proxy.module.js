"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_repository_1 = require("../repositories/user/user.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const login_usecase_1 = require("../../usecases/auth/login.usecase");
let AuthUsecasesProxyModule = AuthUsecasesProxyModule_1 = class AuthUsecasesProxyModule {
    static register() {
        return {
            module: AuthUsecasesProxyModule_1,
            providers: [
                {
                    inject: [user_repository_1.DatabaseUserRepository, config_1.ConfigService],
                    provide: AuthUsecasesProxyModule_1.LOGIN_PROXY,
                    useFactory: (repo, config) => new login_usecase_1.LoginUseCase(repo, config.get('JWT_SECRET'), config.get('JWT_EXPIRATION')),
                },
            ],
            exports: [AuthUsecasesProxyModule_1.LOGIN_PROXY],
        };
    }
};
exports.AuthUsecasesProxyModule = AuthUsecasesProxyModule;
AuthUsecasesProxyModule.LOGIN_PROXY = 'LoginProxy';
exports.AuthUsecasesProxyModule = AuthUsecasesProxyModule = AuthUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], AuthUsecasesProxyModule);
//# sourceMappingURL=auth-usecases-proxy.module.js.map