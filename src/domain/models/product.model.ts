export class ProductModel {
    id: number;
    sku: string; // รหัสบาร์โค้ด
    name: string;
    description?: string;
    price: number; // ราคาขาย (เก็บเป็นจำนวนเต็ม)
    cost: number; // ต้นทุน (เก็บเป็นจำนวนเต็ม)
    categoryId: number; // รหัสหมวดหมู่
    lowStockThreshold: number; // จุดแจ้งเตือนของใกล้หมด
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
}

export class CreateProductRequest {
    sku: string;
    name: string;
    description?: string;
    price: number;
    cost: number;
    categoryId: number;
    lowStockThreshold?: number;
    isActive?: boolean;
}

export class CreateProductResponse extends ProductModel { }

export class UpdateProductRequest {
    id: number;
    sku?: string;
    name?: string;
    description?: string;
    price?: number;
    cost?: number;
    categoryId?: number;
    lowStockThreshold?: number;
    isActive?: boolean;
}

export class UpdateProductResponse {
    id: number;
    success: boolean;
}

export class DeleteProductRequest {
    id: number;
}

export class DeleteProductResponse {
    id: number;
    success: boolean;
}

export class LoadAllProductRequest { }

export class LoadAllProductResponse {
    items: ProductModel[];
    total: number;
}

export class LoadProductByIdRequest {
    id: number;
}

export class LoadProductByIdResponse extends ProductModel { }