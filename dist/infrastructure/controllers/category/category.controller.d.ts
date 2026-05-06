import { CreateCategoryRequest, UpdateCategoryRequest } from '../../../src/domain/models/category.model';
import { QueryProps } from '../../../src/domain/models/query.model';
import { CreateCategoryUseCase } from '../../../src/usecases/category/createCategory.usecase';
import { UpdateCategoryUseCase } from '../../../src/usecases/category/updateCategory.usecase';
import { DeleteCategoryUseCase } from '../../../src/usecases/category/deleteCategory.usecase';
import { LoadCategoryUseCase } from '../../../src/usecases/category/loadCategory.usecase';
import { LoadByIDCategoryUseCase } from '../../../src/usecases/category/loadByIDCategory.usecase';
export declare class CategoryController {
    private readonly createCategoryUseCase;
    private readonly updateCategoryUseCase;
    private readonly deleteCategoryUseCase;
    private readonly loadCategoryUseCase;
    private readonly loadCategoryByIdUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryUseCase, loadCategoryUseCase: LoadCategoryUseCase, loadCategoryByIdUseCase: LoadByIDCategoryUseCase);
    findAll(query: QueryProps): Promise<import("../../../src/domain/models/category.model").LoadAllCategoryResponse>;
    findOne(id: string): Promise<import("../../../src/domain/models/category.model").LoadCategoryByIdResponse>;
    create(body: CreateCategoryRequest): Promise<import("../../../src/domain/models/category.model").CreateCategoryResponse>;
    update(id: string, body: Omit<UpdateCategoryRequest, 'id'>): Promise<void>;
    delete(id: string): Promise<void>;
}
