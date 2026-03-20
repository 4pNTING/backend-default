import { CreateCategoryRequest, UpdateCategoryRequest } from '@domain/models/category.model';
import { QueryProps } from '@domain/models/query.model';
import { CreateCategoryUseCase } from '@usecases/category/createCategory.usecase';
import { UpdateCategoryUseCase } from '@usecases/category/updateCategory.usecase';
import { DeleteCategoryUseCase } from '@usecases/category/deleteCategory.usecase';
import { LoadCategoryUseCase } from '@usecases/category/loadCategory.usecase';
import { LoadByIDCategoryUseCase } from '@usecases/category/loadByIDCategory.usecase';
export declare class CategoryController {
    private readonly createCategoryUseCase;
    private readonly updateCategoryUseCase;
    private readonly deleteCategoryUseCase;
    private readonly loadCategoryUseCase;
    private readonly loadCategoryByIdUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryUseCase, loadCategoryUseCase: LoadCategoryUseCase, loadCategoryByIdUseCase: LoadByIDCategoryUseCase);
    findAll(query: QueryProps): Promise<import("@domain/models/category.model").LoadAllCategoryResponse>;
    findOne(id: string): Promise<import("@domain/models/category.model").LoadCategoryByIdResponse>;
    create(body: CreateCategoryRequest): Promise<import("@domain/models/category.model").CreateCategoryResponse>;
    update(id: string, body: Omit<UpdateCategoryRequest, 'id'>): Promise<void>;
    delete(id: string): Promise<void>;
}
