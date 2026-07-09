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
exports.MenuOptionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const menu_option_model_1 = require("./menu-option.model");
const menu_option_usecases_proxy_module_1 = require("../../usecases-proxy/menu-option-usecases-proxy.module");
const createMenuOption_usecase_1 = require("../../../usecases/menu-option/createMenuOption.usecase");
const updateMenuOption_usecase_1 = require("../../../usecases/menu-option/updateMenuOption.usecase");
const deleteMenuOption_usecase_1 = require("../../../usecases/menu-option/deleteMenuOption.usecase");
const loadMenuOptionByMenuItem_usecase_1 = require("../../../usecases/menu-option/loadMenuOptionByMenuItem.usecase");
let MenuOptionResolver = class MenuOptionResolver {
    constructor(createMenuOptionUseCase, updateMenuOptionUseCase, deleteMenuOptionUseCase, loadMenuOptionByMenuItemUseCase) {
        this.createMenuOptionUseCase = createMenuOptionUseCase;
        this.updateMenuOptionUseCase = updateMenuOptionUseCase;
        this.deleteMenuOptionUseCase = deleteMenuOptionUseCase;
        this.loadMenuOptionByMenuItemUseCase = loadMenuOptionByMenuItemUseCase;
    }
    async loadMenuOptionByMenuItem(input) {
        const result = await this.loadMenuOptionByMenuItemUseCase.execute({ menuItemId: input.menuItemId });
        return { menuOption: result.items };
    }
    async createMenuOption(input) {
        const result = await this.createMenuOptionUseCase.execute(input);
        return { menuOption: result };
    }
    async updateMenuOption(input) {
        await this.updateMenuOptionUseCase.execute(input);
        return { menuOption: { _id: input._id } };
    }
    async deleteMenuOption(input) {
        await this.deleteMenuOptionUseCase.execute(input);
        return { _id: input._id };
    }
};
exports.MenuOptionResolver = MenuOptionResolver;
__decorate([
    (0, graphql_1.Query)(() => menu_option_model_1.LoadMenuOptionResponse, { name: 'loadMenuOptionByMenuItem' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_option_model_1.LoadMenuOptionByMenuItemDto]),
    __metadata("design:returntype", Promise)
], MenuOptionResolver.prototype, "loadMenuOptionByMenuItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_option_model_1.CreateMenuOptionResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_option_model_1.CreateMenuOptionDto]),
    __metadata("design:returntype", Promise)
], MenuOptionResolver.prototype, "createMenuOption", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_option_model_1.UpdateMenuOptionResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_option_model_1.UpdateMenuOptionDto]),
    __metadata("design:returntype", Promise)
], MenuOptionResolver.prototype, "updateMenuOption", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_option_model_1.DeleteMenuOptionResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_option_model_1.DeleteMenuOptionDto]),
    __metadata("design:returntype", Promise)
], MenuOptionResolver.prototype, "deleteMenuOption", null);
exports.MenuOptionResolver = MenuOptionResolver = __decorate([
    (0, graphql_1.Resolver)(() => menu_option_model_1.MenuOption),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(menu_option_usecases_proxy_module_1.MenuOptionUsecasesProxyModule.CREATE_MENU_OPTION_PROXY)),
    __param(1, (0, common_1.Inject)(menu_option_usecases_proxy_module_1.MenuOptionUsecasesProxyModule.UPDATE_MENU_OPTION_PROXY)),
    __param(2, (0, common_1.Inject)(menu_option_usecases_proxy_module_1.MenuOptionUsecasesProxyModule.DELETE_MENU_OPTION_PROXY)),
    __param(3, (0, common_1.Inject)(menu_option_usecases_proxy_module_1.MenuOptionUsecasesProxyModule.LOAD_MENU_OPTION_BY_ITEM_PROXY)),
    __metadata("design:paramtypes", [createMenuOption_usecase_1.CreateMenuOptionUseCase,
        updateMenuOption_usecase_1.UpdateMenuOptionUseCase,
        deleteMenuOption_usecase_1.DeleteMenuOptionUseCase,
        loadMenuOptionByMenuItem_usecase_1.LoadMenuOptionByMenuItemUseCase])
], MenuOptionResolver);
//# sourceMappingURL=menu-option.resolver.js.map