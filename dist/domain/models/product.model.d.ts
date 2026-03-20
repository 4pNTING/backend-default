export declare class ProductModel {
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
}
export declare class CreateProductRequest {
    sku: string;
    name: string;
    description?: string;
    price: number;
    cost: number;
    categoryId: string;
    lowStockThreshold?: number;
    isActive?: string;
}
export declare class CreateProductResponse extends ProductModel {
}
export declare class UpdateProductRequest {
    id: string;
    sku?: string;
    name?: string;
    description?: string;
    price?: number;
    cost?: number;
    categoryId?: string;
    lowStockThreshold?: number;
    isActive?: string;
}
export declare class UpdateProductResponse {
    id: string;
    success: boolean;
}
export declare class DeleteProductRequest {
    id: string;
}
export declare class DeleteProductResponse {
    id: string;
    success: boolean;
}
export declare class LoadAllProductRequest {
}
export declare class LoadAllProductResponse {
    items: ProductModel[];
    total: number;
}
export declare class LoadProductByIdRequest {
    id: string;
}
export declare class LoadProductByIdResponse extends ProductModel {
}
