import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';
import { UpdateZoneRequest } from '../../domain/models/zone.model';
export declare class UpdateZoneUsecase {
    private readonly zoneRepository;
    constructor(zoneRepository: IZoneRepository);
    execute(params: UpdateZoneRequest): Promise<void>;
}
