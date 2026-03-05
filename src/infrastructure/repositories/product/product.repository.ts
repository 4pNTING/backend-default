import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { IProductRepository } from '@domain/repositories/product.repository.interface';
import {
    ProductModel,
    CreateProductRequest,
    CreateProductResponse,
    UpdateProductRequest,
    DeleteProductRequest,
    LoadAllProductResponse,
    LoadProductByIdRequest,
    LoadProductByIdResponse
} from '@domain/models/product.model';
import { QueryProps } from '@domain/models/query.model';

// Import Actions & Validations
import { CreateProductAction } from './createProduct/createProduct.action';
import { CreateProductValidation } from './createProduct/createProduct.validation';

import { UpdateProductAction } from './updateProduct/updateProduct.action';
import { UpdateProductValidation } from './updateProduct/updateProduct.validation';

import { DeleteProductAction } from './deleteProduct/deleteProduct.action';

import { RestoreProductAction } from './restoreProduct/restoreProduct.action';

import { LoadAllProductAction } from './loadAllProduct/loadAllProduct.action';

import { LoadProductByIdAction } from './loadProductById/loadProductById.action';
import { LoadProductByIdValidation } from './loadProductById/loadProductById.validation';

@Injectable()
export class DatabaseProductRepository implements IProductRepository {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productEntity: Repository<ProductEntity>,
        private readonly dataSource: DataSource,
    ) { }

    async create(params: CreateProductRequest): Promise<CreateProductResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new CreateProductValidation(this.productEntity).execute(params);
            const result = await new CreateProductAction(session).execute(params);
            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async update(params: UpdateProductRequest): Promise<void> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new UpdateProductValidation(this.productEntity).execute(params);
            await new UpdateProductAction(session).execute(params);
            await session.commitTransaction();
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async delete(params: DeleteProductRequest): Promise<void> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new DeleteProductAction(session).execute(params);
            await session.commitTransaction();
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async restore(id: number): Promise<void> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new RestoreProductAction(session).execute(id);
            await session.commitTransaction();
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findAll(query: QueryProps): Promise<LoadAllProductResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new LoadAllProductAction(session).execute(query);
            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findById(params: LoadProductByIdRequest): Promise<LoadProductByIdResponse | null> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new LoadProductByIdValidation(this.productEntity).execute(params);
            const result = await new LoadProductByIdAction(session).execute(params);
            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findBySku(sku: string): Promise<LoadProductByIdResponse | null> {
        const entity = await this.productEntity.findOne({ where: { sku } });
        if (!entity) return null;

        return {
            id: entity.id,
            sku: entity.sku,
            name: entity.name,
            description: entity.description,
            price: entity.price,
            cost: entity.cost,
            categoryId: entity.categoryId,
            lowStockThreshold: entity.lowStockThreshold,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            isActive: entity.isActive
        };
    }
}
