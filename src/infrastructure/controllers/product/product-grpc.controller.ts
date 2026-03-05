import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
    CreateProductRequest,
    UpdateProductRequest,
    LoadProductByIdRequest
} from '@domain/models/product.model';

import { ProductUsecasesProxyModule } from '../../usecases-proxy/product-usecases-proxy.module';
import { CreateProductUseCase } from '@usecases/product/createProduct.usecase';
import { UpdateProductUseCase } from '@usecases/product/updateProduct.usecase';
import { DeleteProductUseCase } from '@usecases/product/deleteProduct.usecase';
import { LoadProductUseCase } from '@usecases/product/loadProduct.usecase';
import { LoadProductByIdUseCase } from '@usecases/product/loadProductById.usecase';
import { RestoreProductUseCase } from '@usecases/product/restoreProduct.usecase';

@Controller()
export class ProductGrpcController {
    constructor(
        @Inject(ProductUsecasesProxyModule.CREATE_PRODUCT_PROXY)
        private readonly createProductUseCase: CreateProductUseCase,

        @Inject(ProductUsecasesProxyModule.UPDATE_PRODUCT_PROXY)
        private readonly updateProductUseCase: UpdateProductUseCase,

        @Inject(ProductUsecasesProxyModule.DELETE_PRODUCT_PROXY)
        private readonly deleteProductUseCase: DeleteProductUseCase,

        @Inject(ProductUsecasesProxyModule.LOAD_PRODUCT_PROXY)
        private readonly loadProductUseCase: LoadProductUseCase,

        @Inject(ProductUsecasesProxyModule.LOAD_BY_ID_PRODUCT_PROXY)
        private readonly loadProductByIdUseCase: LoadProductByIdUseCase,

        @Inject(ProductUsecasesProxyModule.RESTORE_PRODUCT_PROXY)
        private readonly restoreProductUseCase: RestoreProductUseCase,
    ) { }

    @GrpcMethod('ProductService', 'Create')
    async create(data: CreateProductRequest) {
        return await this.createProductUseCase.execute(data);
    }

    @GrpcMethod('ProductService', 'FindOne')
    async findOne(data: LoadProductByIdRequest) {
        return await this.loadProductByIdUseCase.execute(data);
    }

    @GrpcMethod('ProductService', 'FindAll')
    async findAll() {
        // gRPC implementation of FindAll (LoadAllProductUseCase expects QueryProps)
        return await this.loadProductUseCase.execute({});
    }

    @GrpcMethod('ProductService', 'Update')
    async update(data: UpdateProductRequest) {
        return await this.updateProductUseCase.execute(data);
    }

    @GrpcMethod('ProductService', 'Delete')
    async delete(data: { id: number }) {
        return await this.deleteProductUseCase.execute(data);
    }

    @GrpcMethod('ProductService', 'Restore')
    async restore(data: { id: number }) {
        return await this.restoreProductUseCase.execute(data.id);
    }
}
