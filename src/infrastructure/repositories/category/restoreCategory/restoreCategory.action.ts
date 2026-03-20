import { QueryRunner } from 'typeorm';
import { CategoryEntity } from '@infrastructure/entities/category.entity';
import { ActiveStatus } from '@domain/enums/enum';

export class RestoreCategoryAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(_id: string): Promise<void> {
        try {
            await this.session.manager.restore(CategoryEntity, _id);
            // Optionally set isActive = true when restoring
            await this.session.manager.update(CategoryEntity, _id, { isActive: ActiveStatus.active });
        } catch (error) {
            console.error('ERROR RestoreCategoryAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
