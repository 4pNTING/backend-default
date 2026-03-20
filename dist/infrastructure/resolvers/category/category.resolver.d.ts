import { Category, CreateCategoryDto, UpdateCategoryDto, LoadCategoryDto, LoadCategoryByIdDto, DeleteCategoryDto, RestoreCategoryDto, ActiveStatus } from './category.model';
import { CreateCategoryUseCase } from '../../../usecases/category/createCategory.usecase';
import { UpdateCategoryUseCase } from '../../../usecases/category/updateCategory.usecase';
import { DeleteCategoryUseCase } from '../../../usecases/category/deleteCategory.usecase';
import { LoadCategoryUseCase } from '../../../usecases/category/loadCategory.usecase';
import { LoadByIDCategoryUseCase } from '../../../usecases/category/loadByIDCategory.usecase';
import { RestoreCategoryUseCase } from '../../../usecases/category/restoreCategory.usecase';
export declare class CategoryResolver {
    private readonly createCategoryUseCase;
    private readonly updateCategoryUseCase;
    private readonly deleteCategoryUseCase;
    private readonly loadCategoryUseCase;
    private readonly loadCategoryByIdUseCase;
    private readonly restoreCategoryUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryUseCase, loadCategoryUseCase: LoadCategoryUseCase, loadCategoryByIdUseCase: LoadByIDCategoryUseCase, restoreCategoryUseCase: RestoreCategoryUseCase);
    loadCategory(input: LoadCategoryDto): Promise<{
        count: number;
        category: {
            _id: string;
            id: string;
            name: string;
            description?: string;
            photo?: string;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: ActiveStatus;
        }[];
    }>;
    loadCategoryById(input: LoadCategoryByIdDto): Promise<{
        category: {
            _id: string;
            id: string;
            name: string;
            description?: string;
            photo?: string;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: ActiveStatus;
        };
    }>;
    createCategory(input: CreateCategoryDto): Promise<{
        category: {
            _id: string;
            id: string;
            name: string;
            description?: string;
            photo?: string;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: ActiveStatus;
        };
    }>;
    updateCategory(input: UpdateCategoryDto): Promise<{
        category: {
            _id: string;
            id: string;
            name: string;
            description?: string;
            photo?: string;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: ActiveStatus;
        };
    }>;
    deleteCategory(input: DeleteCategoryDto): Promise<{
        category: Category;
    }>;
    restoreCategory(input: RestoreCategoryDto): Promise<{
        category: {
            _id: string;
            id: string;
            name: string;
            description?: string;
            photo?: string;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: ActiveStatus;
        };
    }>;
}
