import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    MenuOption, LoadMenuOptionResponse,
    CreateMenuOptionDto, UpdateMenuOptionDto, DeleteMenuOptionDto,
    LoadMenuOptionByMenuItemDto,
    CreateMenuOptionResponse, UpdateMenuOptionResponse, DeleteMenuOptionResponse,
} from './menu-option.model';
import { MenuOptionUsecasesProxyModule }     from '../../usecases-proxy/menu-option-usecases-proxy.module';
import { CreateMenuOptionUseCase }           from '../../../usecases/menu-option/createMenuOption.usecase';
import { UpdateMenuOptionUseCase }           from '../../../usecases/menu-option/updateMenuOption.usecase';
import { DeleteMenuOptionUseCase }           from '../../../usecases/menu-option/deleteMenuOption.usecase';
import { LoadMenuOptionByMenuItemUseCase }   from '../../../usecases/menu-option/loadMenuOptionByMenuItem.usecase';

@Resolver(() => MenuOption)
@UseGuards(JwtAuthGuard)
export class MenuOptionResolver {
    constructor(
        @Inject(MenuOptionUsecasesProxyModule.CREATE_MENU_OPTION_PROXY)
        private readonly createMenuOptionUseCase: CreateMenuOptionUseCase,

        @Inject(MenuOptionUsecasesProxyModule.UPDATE_MENU_OPTION_PROXY)
        private readonly updateMenuOptionUseCase: UpdateMenuOptionUseCase,

        @Inject(MenuOptionUsecasesProxyModule.DELETE_MENU_OPTION_PROXY)
        private readonly deleteMenuOptionUseCase: DeleteMenuOptionUseCase,

        @Inject(MenuOptionUsecasesProxyModule.LOAD_MENU_OPTION_BY_ITEM_PROXY)
        private readonly loadMenuOptionByMenuItemUseCase: LoadMenuOptionByMenuItemUseCase,
    ) { }

    @Query(() => LoadMenuOptionResponse, { name: 'loadMenuOptionByMenuItem' })
    async loadMenuOptionByMenuItem(@Args('input') input: LoadMenuOptionByMenuItemDto) {
        const result = await this.loadMenuOptionByMenuItemUseCase.execute({ menuItemId: input.menuItemId });
        return { menuOption: result.items };
    }

    @Mutation(() => CreateMenuOptionResponse)
    async createMenuOption(@Args('input') input: CreateMenuOptionDto) {
        const result = await this.createMenuOptionUseCase.execute(input);
        return { menuOption: result };
    }

    @Mutation(() => UpdateMenuOptionResponse)
    async updateMenuOption(@Args('input') input: UpdateMenuOptionDto) {
        await this.updateMenuOptionUseCase.execute(input);
        return { menuOption: { _id: input._id } };
    }

    @Mutation(() => DeleteMenuOptionResponse)
    async deleteMenuOption(@Args('input') input: DeleteMenuOptionDto) {
        await this.deleteMenuOptionUseCase.execute(input);
        return { _id: input._id };
    }
}
