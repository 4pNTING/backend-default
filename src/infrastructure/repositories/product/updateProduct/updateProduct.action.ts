import { QueryRunner } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { UpdateProductRequest } from '@domain/models/product.model';

export class UpdateProductAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(params: UpdateProductRequest): Promise<void> {
        try {
            const { id, ...updateData } = params;

            const updatePayload: any = { ...updateData, updatedAt: new Date() };

            await this.session.manager.update(
                ProductEntity,
                { id: params.id },
                updatePayload
            );
        } catch (error) {
            console.error('ERROR UpdateProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
