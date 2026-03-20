import { CreateCategoryDto, UpdateCategoryDto, LoadCategoryDto, LoadCategoryByIdDto, DeleteCategoryDto, RestoreCategoryDto } from './category.model';
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
        category: import("../../../domain/models/category.model").CategoryModel[];
    }>;
    loadCategoryById(input: LoadCategoryByIdDto): Promise<{
        category: import("../../../domain/models/category.model").LoadCategoryByIdResponse;
    }>;
    createCategory(input: CreateCategoryDto): Promise<{
        category: import("../../../domain/models/category.model").CreateCategoryResponse;
    }>;
    updateCategory(input: UpdateCategoryDto): Promise<{
        category: import("../../../domain/models/category.model").LoadCategoryByIdResponse;
    }>;
    deleteCategory(input: DeleteCategoryDto): Promise<{
        category: {
            _id: string;
        };
    }>;
    restoreCategory(input: RestoreCategoryDto): Promise<{
        category: import("../../../domain/models/category.model").CategoryModel;
    }>;
}
