import { CreateProductRequest, UpdateProductRequest, LoadProductByIdRequest } from '@domain/models/product.model';
import { CreateProductUseCase } from '@usecases/product/createProduct.usecase';
import { UpdateProductUseCase } from '@usecases/product/updateProduct.usecase';
import { DeleteProductUseCase } from '@usecases/product/deleteProduct.usecase';
import { LoadProductUseCase } from '@usecases/product/loadProduct.usecase';
import { LoadProductByIdUseCase } from '@usecases/product/loadProductById.usecase';
import { RestoreProductUseCase } from '@usecases/product/restoreProduct.usecase';
export declare class ProductGrpcController {
    private readonly createProductUseCase;
    private readonly updateProductUseCase;
    private readonly deleteProductUseCase;
    private readonly loadProductUseCase;
    private readonly loadProductByIdUseCase;
    private readonly restoreProductUseCase;
    constructor(createProductUseCase: CreateProductUseCase, updateProductUseCase: UpdateProductUseCase, deleteProductUseCase: DeleteProductUseCase, loadProductUseCase: LoadProductUseCase, loadProductByIdUseCase: LoadProductByIdUseCase, restoreProductUseCase: RestoreProductUseCase);
    create(data: CreateProductRequest): Promise<import("@domain/models/product.model").CreateProductResponse>;
    findOne(data: LoadProductByIdRequest): Promise<import("@domain/models/product.model").LoadProductByIdResponse>;
    findAll(): Promise<import("@domain/models/product.model").LoadAllProductResponse>;
    update(data: UpdateProductRequest): Promise<void>;
    delete(data: {
        id: string;
    }): Promise<void>;
    restore(data: {
        id: string;
    }): Promise<void>;
}
