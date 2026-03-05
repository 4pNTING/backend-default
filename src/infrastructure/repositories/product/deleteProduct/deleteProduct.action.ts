import { QueryRunner } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { DeleteProductRequest } from '@domain/models/product.model';

export class DeleteProductAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(params: DeleteProductRequest): Promise<void> {
        try {
            await this.session.manager.softDelete(ProductEntity, params.id);
        } catch (error) {
            console.error('ERROR DeleteProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
