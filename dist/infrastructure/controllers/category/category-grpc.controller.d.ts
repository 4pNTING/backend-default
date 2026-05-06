import { CreateCategoryRequest, UpdateCategoryRequest, LoadCategoryByIdRequest } from '../../../src/domain/models/category.model';
import { CreateCategoryUseCase } from '../../../src/usecases/category/createCategory.usecase';
import { UpdateCategoryUseCase } from '../../../src/usecases/category/updateCategory.usecase';
import { DeleteCategoryUseCase } from '../../../src/usecases/category/deleteCategory.usecase';
import { LoadCategoryUseCase } from '../../../src/usecases/category/loadCategory.usecase';
import { LoadByIDCategoryUseCase } from '../../../src/usecases/category/loadByIDCategory.usecase';
export declare class CategoryGrpcController {
    private readonly createCategoryUseCase;
    private readonly updateCategoryUseCase;
    private readonly deleteCategoryUseCase;
    private readonly loadCategoryUseCase;
    private readonly loadCategoryByIdUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryUseCase, loadCategoryUseCase: LoadCategoryUseCase, loadCategoryByIdUseCase: LoadByIDCategoryUseCase);
    create(data: CreateCategoryRequest): Promise<import("../../../src/domain/models/category.model").CreateCategoryResponse>;
    findOne(data: LoadCategoryByIdRequest): Promise<import("../../../src/domain/models/category.model").LoadCategoryByIdResponse>;
    findAll(): Promise<import("../../../src/domain/models/category.model").LoadAllCategoryResponse>;
    update(data: UpdateCategoryRequest): Promise<void>;
    delete(data: {
        id: string;
    }): Promise<void>;
}
