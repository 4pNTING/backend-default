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
exports.AuthResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const auth_usecases_proxy_module_1 = require("../../usecases-proxy/auth-usecases-proxy.module");
const login_usecase_1 = require("../../../usecases/auth/login.usecase");
const enum_1 = require("../../../domain/enums/enum");
let AuthLoginArgs = class AuthLoginArgs {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthLoginArgs.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthLoginArgs.prototype, "password", void 0);
AuthLoginArgs = __decorate([
    (0, graphql_1.InputType)()
], AuthLoginArgs);
let AuthLoginResponse = class AuthLoginResponse {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthLoginResponse.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthLoginResponse.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthLoginResponse.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AuthLoginResponse.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthLoginResponse.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthLoginResponse.prototype, "refreshToken", void 0);
AuthLoginResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AuthLoginResponse);
let AuthResolver = class AuthResolver {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
    }
    async login(loginData) {
        return this.loginUseCase.execute(loginData);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Mutation)(() => AuthLoginResponse),
    __param(0, (0, graphql_1.Args)('loginData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthLoginArgs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __param(0, (0, common_1.Inject)(auth_usecases_proxy_module_1.AuthUsecasesProxyModule.LOGIN_PROXY)),
    __metadata("design:paramtypes", [login_usecase_1.LoginUseCase])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map