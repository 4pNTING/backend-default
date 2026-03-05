import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    Product,
    LoadProductResponse,
    LoadProductByIdResponse,
    CreateProductDto,
    UpdateProductDto,
    LoadProductDto,
    LoadProductByIdDto,
    DeleteProductDto,
    RestoreProductDto,
    CreateProductResponse,
    UpdateProductResponse,
    DeleteProductResponse,
    RestoreProductResponse
} from './product.model';
import { ActiveStatus } from '@domain/enums/enum';
import { ProductUsecasesProxyModule } from '@infrastructure/usecases-proxy/product-usecases-proxy.module';
import { CreateProductUseCase } from '@usecases/product/createProduct.usecase';
import { UpdateProductUseCase } from '@usecases/product/updateProduct.usecase';
import { DeleteProductUseCase } from '@usecases/product/deleteProduct.usecase';
import { LoadProductUseCase } from '@usecases/product/loadProduct.usecase';
import { LoadProductByIdUseCase } from '@usecases/product/loadProductById.usecase';
import { RestoreProductUseCase } from '@usecases/product/restoreProduct.usecase';

@Resolver(() => Product)
@UseGuards(JwtAuthGuard)
export class ProductResolver {
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

    @Query(() => LoadProductResponse, { name: 'loadProduct' })
    async loadProduct(
        @Args('input', { nullable: true }) input: LoadProductDto
    ) {
        const query: any = {};

        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page || 1,
                    limit: input.limit || 10
                };
            }

            if (input.keyword) {
                query.search = {
                    q: input.keyword
                };
            }

            if (input.isActive) {
                let isActiveValue: boolean | undefined;
                if (input.isActive === ActiveStatus.ACTIVE) isActiveValue = true;
                if (input.isActive === ActiveStatus.INACTIVE) isActiveValue = false;

                if (isActiveValue !== undefined) {
                    query.isActive = isActiveValue;
                }
            }
        }

        const result = await this.loadProductUseCase.execute(query);

        const items = result.items.map(item => ({
            ...item,
            _id: item.id
        }));

        return {
            count: result.total,
            product: items,
        };
    }

    @Query(() => LoadProductByIdResponse, { name: 'loadProductById', nullable: true })
    async loadProductById(
        @Args('input') input: LoadProductByIdDto
    ) {
        const result = await this.loadProductByIdUseCase.execute({ id: input._id });
        if (!result) return { product: null };
        return {
            product: { ...result, _id: result.id }
        };
    }

    @Mutation(() => CreateProductResponse)
    async createProduct(
        @Args('input') input: CreateProductDto
    ) {
        const result = await this.createProductUseCase.execute(input);
        return {
            product: { ...result, _id: result.id }
        };
    }

    @Mutation(() => UpdateProductResponse)
    async updateProduct(
        @Args('input') input: UpdateProductDto
    ) {
        const { _id, ...data } = input;
        await this.updateProductUseCase.execute({ id: _id, ...data });

        const updatedProduct = await this.loadProductByIdUseCase.execute({ id: _id });
        return {
            product: updatedProduct ? { ...updatedProduct, _id: updatedProduct.id } : null
        };
    }

    @Mutation(() => DeleteProductResponse)
    async deleteProduct(
        @Args('input') input: DeleteProductDto
    ) {
        const productData = await this.loadProductByIdUseCase.execute({ id: input._id });
        await this.deleteProductUseCase.execute({ id: input._id });
        return {
            product: productData ? { ...productData, _id: productData.id } : null
        };
    }

    @Mutation(() => RestoreProductResponse)
    async restoreProduct(
        @Args('input') input: RestoreProductDto
    ) {
        await this.restoreProductUseCase.execute(input._id);
        const result = await this.loadProductByIdUseCase.execute({ id: input._id });

        return {
            product: result ? { ...result, _id: result.id } : null
        };
    }
}
