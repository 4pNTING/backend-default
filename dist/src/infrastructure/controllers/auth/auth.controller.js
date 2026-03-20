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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const auth_usecases_proxy_module_1 = require("../../usecases-proxy/auth-usecases-proxy.module");
const login_usecase_1 = require("../../../usecases/auth/login.usecase");
const user_model_1 = require("../../../domain/models/user.model");
let AuthController = class AuthController {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
    }
    async login(data) {
        try {
            const result = await this.loginUseCase.execute(data);
            return {
                _id: result._id,
                role: result.role,
                is_active: result.isActive,
                username: result.username,
                token: result.token,
                created_at: result.createdAt,
                updated_at: result.updatedAt,
            };
        }
        catch (error) {
            console.error('Login Error:', error);
            return {
                success: false,
                message: error.message || 'Internal Server Error',
            };
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, microservices_1.GrpcMethod)('AuthService', 'Login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.LoginRequest]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(auth_usecases_proxy_module_1.AuthUsecasesProxyModule.LOGIN_PROXY)),
    __metadata("design:paramtypes", [login_usecase_1.LoginUseCase])
], AuthController);
//# sourceMappingURL=auth.controller.js.map