import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';
export declare class RestoreZoneUsecase {
    private readonly zoneRepository;
    constructor(zoneRepository: IZoneRepository);
    execute(_id: string): Promise<void>;
}
