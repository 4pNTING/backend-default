import { ActiveStatus } from '../../../domain/enums/enum';
import { Category } from '../category/category.model';
import { InventoryLevel } from '../inventory-level/inventory-level.model';
export declare class Product {
    _id: string;
    sku: string;
    name: string;
    description?: string;
    price: number;
    cost: number;
    categoryId: string;
    lowStockThreshold: number;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: string;
    category?: Category;
    inventoryLevels?: InventoryLevel[];
}
export declare class LoadProductResponse {
    count: number;
    product: Product[];
}
export declare class LoadProductByIdResponse {
    product: Product;
}
export declare class CreateProductResponse {
    product: Product;
}
export declare class UpdateProductResponse {
    product: Product;
}
export declare class DeleteProductResponse {
    product: Product;
}
export declare class RestoreProductResponse {
    product: Product;
}
export declare class CreateProductDto {
    sku: string;
    name: string;
    description?: string;
    price: number;
    cost: number;
    categoryId: string;
    lowStockThreshold?: number;
    isActive?: string;
}
export declare class UpdateProductDto {
    _id: string;
    sku?: string;
    name?: string;
    description?: string;
    price?: number;
    cost?: number;
    categoryId?: string;
    lowStockThreshold?: number;
    isActive?: string;
}
export declare class LoadProductByIdDto {
    _id: string;
}
export declare class DeleteProductDto {
    _id: string;
}
export declare class RestoreProductDto {
    _id: string;
}
export declare class LoadProductDto {
    page?: number;
    limit?: number;
    isActive?: ActiveStatus;
    keyword?: string;
}
