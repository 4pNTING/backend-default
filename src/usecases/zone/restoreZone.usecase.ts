import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';

export class RestoreZoneUsecase {
    constructor(private readonly zoneRepository: IZoneRepository) { }

    async execute(_id: string): Promise<void> {
        return await this.zoneRepository.restore(_id);
    }
}
