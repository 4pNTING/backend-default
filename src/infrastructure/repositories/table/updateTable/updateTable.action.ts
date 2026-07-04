import { QueryRunner } from 'typeorm';
import { TableEntity } from '@infrastructure/entities/table.entity';
import { UpdateTableRequest } from '@domain/models/table.model';

export class UpdateTableAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(params: UpdateTableRequest): Promise<void> {
        try {
            const updateData: Partial<TableEntity> = {};
            if (params.number   !== undefined) updateData.number   = params.number;
            if (params.zoneId   !== undefined) updateData.zoneId   = params.zoneId;
            if (params.capacity !== undefined) updateData.capacity = params.capacity;
            if (params.status   !== undefined) updateData.status   = params.status;
            if (params.isActive !== undefined) updateData.isActive = params.isActive;

            await this.session.manager.update(TableEntity, { _id: params._id }, updateData);
        } catch (error) {
            console.error('ERROR UpdateTableAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
