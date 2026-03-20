import { QueryRunner } from 'typeorm';
import { ZoneEntity } from '@infrastructure/entities/zone.entity';
import { ActiveStatus } from '@domain/enums/enum';

export class RestoreZoneAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(id: string): Promise<void> {
        try {
            await this.session.manager.restore(ZoneEntity, id);
            await this.session.manager.update(ZoneEntity, id, { isActive: ActiveStatus.active });
        } catch (error) {
            console.error('ERROR RestoreZoneAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
