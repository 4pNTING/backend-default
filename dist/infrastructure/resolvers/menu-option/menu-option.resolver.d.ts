import { CreateMenuOptionDto, UpdateMenuOptionDto, DeleteMenuOptionDto, LoadMenuOptionByMenuItemDto } from './menu-option.model';
import { CreateMenuOptionUseCase } from '../../../usecases/menu-option/createMenuOption.usecase';
import { UpdateMenuOptionUseCase } from '../../../usecases/menu-option/updateMenuOption.usecase';
import { DeleteMenuOptionUseCase } from '../../../usecases/menu-option/deleteMenuOption.usecase';
import { LoadMenuOptionByMenuItemUseCase } from '../../../usecases/menu-option/loadMenuOptionByMenuItem.usecase';
export declare class MenuOptionResolver {
    private readonly createMenuOptionUseCase;
    private readonly updateMenuOptionUseCase;
    private readonly deleteMenuOptionUseCase;
    private readonly loadMenuOptionByMenuItemUseCase;
    constructor(createMenuOptionUseCase: CreateMenuOptionUseCase, updateMenuOptionUseCase: UpdateMenuOptionUseCase, deleteMenuOptionUseCase: DeleteMenuOptionUseCase, loadMenuOptionByMenuItemUseCase: LoadMenuOptionByMenuItemUseCase);
    loadMenuOptionByMenuItem(input: LoadMenuOptionByMenuItemDto): Promise<{
        menuOption: import("../../../domain/models/menu-option.model").MenuOptionModel[];
    }>;
    createMenuOption(input: CreateMenuOptionDto): Promise<{
        menuOption: import("../../../domain/models/menu-option.model").CreateMenuOptionResponse;
    }>;
    updateMenuOption(input: UpdateMenuOptionDto): Promise<{
        menuOption: {
            _id: string;
        };
    }>;
    deleteMenuOption(input: DeleteMenuOptionDto): Promise<{
        _id: string;
    }>;
}
