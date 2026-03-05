import { QueryRunner } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';

export class RestoreProductAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(id: number): Promise<void> {
        try {
            await this.session.manager.restore(ProductEntity, id);
        } catch (error) {
            console.error('ERROR RestoreProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
