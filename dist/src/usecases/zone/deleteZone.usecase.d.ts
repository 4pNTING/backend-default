import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';
import { DeleteZoneRequest } from '../../domain/models/zone.model';
export declare class DeleteZoneUsecase {
    private readonly zoneRepository;
    constructor(zoneRepository: IZoneRepository);
    execute(params: DeleteZoneRequest): Promise<void>;
}
