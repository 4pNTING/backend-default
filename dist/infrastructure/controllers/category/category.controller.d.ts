import { CreateCategoryRequest, UpdateCategoryRequest } from '../../../domain/models/category.model.js';
import { QueryProps } from '../../../domain/models/query.model.js';
import { CreateCategoryUseCase } from '../../../usecases/category/createCategory.usecase.js';
import { UpdateCategoryUseCase } from '../../../usecases/category/updateCategory.usecase.js';
import { DeleteCategoryUseCase } from '../../../usecases/category/deleteCategory.usecase.js';
import { LoadCategoryUseCase } from '../../../usecases/category/loadCategory.usecase.js';
import { LoadByIDCategoryUseCase } from '../../../usecases/category/loadByIDCategory.usecase.js';
import { RestoreCategoryUseCase } from '../../../usecases/category/restoreCategory.usecase.js';
export declare class CategoryController {
    private readonly createCategoryUseCase;
    private readonly updateCategoryUseCase;
    private readonly deleteCategoryUseCase;
    private readonly loadCategoryUseCase;
    private readonly loadCategoryByIdUseCase;
    private readonly restoreCategoryUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryUseCase, loadCategoryUseCase: LoadCategoryUseCase, loadCategoryByIdUseCase: LoadByIDCategoryUseCase, restoreCategoryUseCase: RestoreCategoryUseCase);
    findAll(query: QueryProps): Promise<import("../../../domain/models/category.model.js").LoadAllCategoryResponse>;
    findOne(id: string): Promise<import("../../../domain/models/category.model.js").LoadCategoryByIdResponse>;
    create(body: CreateCategoryRequest): Promise<import("../../../domain/models/category.model.js").CreateCategoryResponse>;
    update(id: string, body: Omit<UpdateCategoryRequest, '_id'>): Promise<void>;
    delete(id: string): Promise<void>;
    restore(id: string): Promise<import("../../../domain/models/category.model.js").CategoryModel>;
}
