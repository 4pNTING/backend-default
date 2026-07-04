import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseMenuOptionRepository } from '../repositories/menu-option/menu-option.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { CreateMenuOptionUseCase }           from '../../usecases/menu-option/createMenuOption.usecase';
import { UpdateMenuOptionUseCase }           from '../../usecases/menu-option/updateMenuOption.usecase';
import { DeleteMenuOptionUseCase }           from '../../usecases/menu-option/deleteMenuOption.usecase';
import { LoadMenuOptionByMenuItemUseCase }   from '../../usecases/menu-option/loadMenuOptionByMenuItem.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class MenuOptionUsecasesProxyModule {
    static CREATE_MENU_OPTION_PROXY             = 'CreateMenuOptionProxy';
    static UPDATE_MENU_OPTION_PROXY             = 'UpdateMenuOptionProxy';
    static DELETE_MENU_OPTION_PROXY             = 'DeleteMenuOptionProxy';
    static LOAD_MENU_OPTION_BY_ITEM_PROXY       = 'LoadMenuOptionByItemProxy';

    static register(): DynamicModule {
        return {
            module: MenuOptionUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule.CREATE_MENU_OPTION_PROXY,
                    useFactory: (repo: DatabaseMenuOptionRepository) => new CreateMenuOptionUseCase(repo),
                },
                {
                    inject: [DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule.UPDATE_MENU_OPTION_PROXY,
                    useFactory: (repo: DatabaseMenuOptionRepository) => new UpdateMenuOptionUseCase(repo),
                },
                {
                    inject: [DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule.DELETE_MENU_OPTION_PROXY,
                    useFactory: (repo: DatabaseMenuOptionRepository) => new DeleteMenuOptionUseCase(repo),
                },
                {
                    inject: [DatabaseMenuOptionRepository],
                    provide: MenuOptionUsecasesProxyModule.LOAD_MENU_OPTION_BY_ITEM_PROXY,
                    useFactory: (repo: DatabaseMenuOptionRepository) => new LoadMenuOptionByMenuItemUseCase(repo),
                },
            ],
            exports: [
                MenuOptionUsecasesProxyModule.CREATE_MENU_OPTION_PROXY,
                MenuOptionUsecasesProxyModule.UPDATE_MENU_OPTION_PROXY,
                MenuOptionUsecasesProxyModule.DELETE_MENU_OPTION_PROXY,
                MenuOptionUsecasesProxyModule.LOAD_MENU_OPTION_BY_ITEM_PROXY,
            ],
        };
    }
}
