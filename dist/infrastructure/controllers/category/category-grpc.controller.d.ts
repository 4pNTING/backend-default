import { CreateCategoryRequest, UpdateCategoryRequest, LoadCategoryByIdRequest } from '../../../domain/models/category.model.js';
import { CreateCategoryUseCase } from '../../../usecases/category/createCategory.usecase.js';
import { UpdateCategoryUseCase } from '../../../usecases/category/updateCategory.usecase.js';
import { DeleteCategoryUseCase } from '../../../usecases/category/deleteCategory.usecase.js';
import { LoadCategoryUseCase } from '../../../usecases/category/loadCategory.usecase.js';
import { LoadByIDCategoryUseCase } from '../../../usecases/category/loadByIDCategory.usecase.js';
export declare class CategoryGrpcController {
    private readonly createCategoryUseCase;
    private readonly updateCategoryUseCase;
    private readonly deleteCategoryUseCase;
    private readonly loadCategoryUseCase;
    private readonly loadCategoryByIdUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryUseCase, loadCategoryUseCase: LoadCategoryUseCase, loadCategoryByIdUseCase: LoadByIDCategoryUseCase);
    create(data: CreateCategoryRequest): Promise<import("../../../domain/models/category.model.js").CreateCategoryResponse>;
    findOne(data: LoadCategoryByIdRequest): Promise<import("../../../domain/models/category.model.js").LoadCategoryByIdResponse>;
    findAll(): Promise<import("../../../domain/models/category.model.js").LoadAllCategoryResponse>;
    update(data: UpdateCategoryRequest): Promise<void>;
    delete(data: {
        _id: string;
    }): Promise<void>;
}
