import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseProductRepository } from '../repositories/product/product.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { CreateProductUseCase } from '../../usecases/product/createProduct.usecase';
import { UpdateProductUseCase } from '../../usecases/product/updateProduct.usecase';
import { DeleteProductUseCase } from '../../usecases/product/deleteProduct.usecase';
import { LoadProductUseCase } from '../../usecases/product/loadProduct.usecase';
import { LoadProductByIdUseCase } from '../../usecases/product/loadProductById.usecase';
import { RestoreProductUseCase } from '../../usecases/product/restoreProduct.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class ProductUsecasesProxyModule {
    static CREATE_PRODUCT_PROXY = 'CreateProductProxy';
    static UPDATE_PRODUCT_PROXY = 'UpdateProductProxy';
    static DELETE_PRODUCT_PROXY = 'DeleteProductProxy';
    static LOAD_PRODUCT_PROXY = 'LoadProductProxy';
    static LOAD_BY_ID_PRODUCT_PROXY = 'LoadByIdProductProxy';
    static RESTORE_PRODUCT_PROXY = 'RestoreProductProxy';

    static register(): DynamicModule {
        return {
            module: ProductUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule.CREATE_PRODUCT_PROXY,
                    useFactory: (repo: DatabaseProductRepository) => new CreateProductUseCase(repo),
                },
                {
                    inject: [DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule.UPDATE_PRODUCT_PROXY,
                    useFactory: (repo: DatabaseProductRepository) => new UpdateProductUseCase(repo),
                },
                {
                    inject: [DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule.DELETE_PRODUCT_PROXY,
                    useFactory: (repo: DatabaseProductRepository) => new DeleteProductUseCase(repo),
                },
                {
                    inject: [DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule.LOAD_PRODUCT_PROXY,
                    useFactory: (repo: DatabaseProductRepository) => new LoadProductUseCase(repo),
                },
                {
                    inject: [DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule.LOAD_BY_ID_PRODUCT_PROXY,
                    useFactory: (repo: DatabaseProductRepository) => new LoadProductByIdUseCase(repo),
                },
                {
                    inject: [DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule.RESTORE_PRODUCT_PROXY,
                    useFactory: (repo: DatabaseProductRepository) => new RestoreProductUseCase(repo),
                },
            ],
            exports: [
                ProductUsecasesProxyModule.CREATE_PRODUCT_PROXY,
                ProductUsecasesProxyModule.UPDATE_PRODUCT_PROXY,
                ProductUsecasesProxyModule.DELETE_PRODUCT_PROXY,
                ProductUsecasesProxyModule.LOAD_PRODUCT_PROXY,
                ProductUsecasesProxyModule.LOAD_BY_ID_PRODUCT_PROXY,
                ProductUsecasesProxyModule.RESTORE_PRODUCT_PROXY,
            ],
        };
    }
}
