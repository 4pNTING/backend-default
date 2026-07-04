import { QueryRunner } from 'typeorm';
import { TableEntity } from '@infrastructure/entities/table.entity';
import { LoadTableByIdRequest, LoadTableByIdResponse } from '@domain/models/table.model';

export class LoadTableByIdAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(params: LoadTableByIdRequest): Promise<LoadTableByIdResponse | null> {
        try {
            const entity = await this.session.manager.findOne(TableEntity, {
                where: { _id: params._id },
            });
            if (!entity) return null;
            return entity as LoadTableByIdResponse;
        } catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
