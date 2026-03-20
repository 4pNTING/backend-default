import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';

export class RestoreZoneUsecase {
    constructor(private readonly zoneRepository: IZoneRepository) { }

    async execute(id: string): Promise<void> {
        return await this.zoneRepository.restore(id);
    }
}
