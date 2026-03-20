import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';
export declare class RestoreZoneUsecase {
    private readonly zoneRepository;
    constructor(zoneRepository: IZoneRepository);
    execute(id: string): Promise<void>;
}
