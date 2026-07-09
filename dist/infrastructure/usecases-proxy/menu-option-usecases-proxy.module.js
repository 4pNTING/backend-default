"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MenuOptionUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuOptionUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const menu_option_repository_1 = require("../repositories/menu-option/menu-option.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createMenuOption_usecase_1 = require("../../usecases/menu-option/createMenuOption.usecase");
const updateMenuOption_usecase_1 = require("../../usecases/menu-option/updateMenuOption.usecase");
const deleteMenuOption_usecase_1 = require("../../usecases/menu-option/deleteMenuOption.usecase");
const loadMenuOptionByMenuItem_usecase_1 = require("../../usecases/menu-option/loadMenuOptionByMenuItem.usecase");
let MenuOptionUsecasesProxyModule = MenuOptionUsecasesProxyModule_1 = class MenuOptionUsecasesProxyModule {
    static register() {
        return {
            module: MenuOptionUsecasesProxyModule_1,
            providers: [
                {
                    inject: [menu_option_repository_1.DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule_1.CREATE_MENU_OPTION_PROXY,
                    useFactory: (repo) => new createMenuOption_usecase_1.CreateMenuOptionUseCase(repo),
                },
                {
                    inject: [menu_option_repository_1.DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule_1.UPDATE_MENU_OPTION_PROXY,
                    useFactory: (repo) => new updateMenuOption_usecase_1.UpdateMenuOptionUseCase(repo),
                },
                {
                    inject: [menu_option_repository_1.DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule_1.DELETE_MENU_OPTION_PROXY,
                    useFactory: (repo) => new deleteMenuOption_usecase_1.DeleteMenuOptionUseCase(repo),
                },
                {
                    inject: [menu_option_repository_1.DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule_1.LOAD_MENU_OPTION_BY_ITEM_PROXY,
                    useFactory: (repo) => new loadMenuOptionByMenuItem_usecase_1.LoadMenuOptionByMenuItemUseCase(repo),
                },
            ],
            exports: [
                MenuOptionUsecasesProxyModule_1.CREATE_MENU_OPTION_PROXY,
                MenuOptionUsecasesProxyModule_1.UPDATE_MENU_OPTION_PROXY,
                MenuOptionUsecasesProxyModule_1.DELETE_MENU_OPTION_PROXY,
                MenuOptionUsecasesProxyModule_1.LOAD_MENU_OPTION_BY_ITEM_PROXY,
            ],
        };
    }
};
exports.MenuOptionUsecasesProxyModule = MenuOptionUsecasesProxyModule;
MenuOptionUsecasesProxyModule.CREATE_MENU_OPTION_PROXY = 'CreateMenuOptionProxy';
MenuOptionUsecasesProxyModule.UPDATE_MENU_OPTION_PROXY = 'UpdateMenuOptionProxy';
MenuOptionUsecasesProxyModule.DELETE_MENU_OPTION_PROXY = 'DeleteMenuOptionProxy';
MenuOptionUsecasesProxyModule.LOAD_MENU_OPTION_BY_ITEM_PROXY = 'LoadMenuOptionByItemProxy';
exports.MenuOptionUsecasesProxyModule = MenuOptionUsecasesProxyModule = MenuOptionUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], MenuOptionUsecasesProxyModule);
//# sourceMappingURL=menu-option-usecases-proxy.module.js.map