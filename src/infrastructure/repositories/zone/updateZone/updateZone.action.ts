import { QueryRunner } from 'typeorm';
import { ZoneEntity } from '@infrastructure/entities/zone.entity';
import { UpdateZoneRequest } from '@domain/models/zone.model';

export class UpdateZoneAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(params: UpdateZoneRequest): Promise<void> {
        console.log('--- UpdateZoneAction PARAMS ---', params);
        try {
            await this.session.manager.update(ZoneEntity, params._id, {
                name: params.name,
                isActive: params.isActive,
                updatedAt: new Date()
            });
        } catch (error) {
            console.error('ERROR UpdateZoneAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
