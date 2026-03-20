import { CreateProductDto, UpdateProductDto, LoadProductDto, LoadProductByIdDto, DeleteProductDto, RestoreProductDto } from './product.model';
import { CreateProductUseCase } from '@usecases/product/createProduct.usecase';
import { UpdateProductUseCase } from '@usecases/product/updateProduct.usecase';
import { DeleteProductUseCase } from '@usecases/product/deleteProduct.usecase';
import { LoadProductUseCase } from '@usecases/product/loadProduct.usecase';
import { LoadProductByIdUseCase } from '@usecases/product/loadProductById.usecase';
import { RestoreProductUseCase } from '@usecases/product/restoreProduct.usecase';
export declare class ProductResolver {
    private readonly createProductUseCase;
    private readonly updateProductUseCase;
    private readonly deleteProductUseCase;
    private readonly loadProductUseCase;
    private readonly loadProductByIdUseCase;
    private readonly restoreProductUseCase;
    constructor(createProductUseCase: CreateProductUseCase, updateProductUseCase: UpdateProductUseCase, deleteProductUseCase: DeleteProductUseCase, loadProductUseCase: LoadProductUseCase, loadProductByIdUseCase: LoadProductByIdUseCase, restoreProductUseCase: RestoreProductUseCase);
    loadProduct(input: LoadProductDto): Promise<{
        count: number;
        product: {
            _id: string;
            id: string;
            sku?: string;
            name: string;
            description?: string;
            price: number;
            cost: number;
            categoryId: string;
            lowStockThreshold: number;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: string;
        }[];
    }>;
    loadProductById(input: LoadProductByIdDto): Promise<{
        product: {
            _id: string;
            id: string;
            sku?: string;
            name: string;
            description?: string;
            price: number;
            cost: number;
            categoryId: string;
            lowStockThreshold: number;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: string;
        };
    }>;
    createProduct(input: CreateProductDto): Promise<{
        product: {
            _id: string;
            id: string;
            sku?: string;
            name: string;
            description?: string;
            price: number;
            cost: number;
            categoryId: string;
            lowStockThreshold: number;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: string;
        };
    }>;
    updateProduct(input: UpdateProductDto): Promise<{
        product: {
            _id: string;
            id: string;
            sku?: string;
            name: string;
            description?: string;
            price: number;
            cost: number;
            categoryId: string;
            lowStockThreshold: number;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: string;
        };
    }>;
    deleteProduct(input: DeleteProductDto): Promise<{
        product: {
            _id: string;
            id: string;
            sku?: string;
            name: string;
            description?: string;
            price: number;
            cost: number;
            categoryId: string;
            lowStockThreshold: number;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: string;
        };
    }>;
    restoreProduct(input: RestoreProductDto): Promise<{
        product: {
            _id: string;
            id: string;
            sku?: string;
            name: string;
            description?: string;
            price: number;
            cost: number;
            categoryId: string;
            lowStockThreshold: number;
            createdAt?: Date;
            updatedAt?: Date;
            isActive?: string;
        };
    }>;
}
