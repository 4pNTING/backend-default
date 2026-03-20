import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';
import { LoadZoneByIdRequest, LoadZoneByIdResponse } from '../../domain/models/zone.model';
export declare class LoadZoneByIdUsecase {
    private readonly zoneRepository;
    constructor(zoneRepository: IZoneRepository);
    execute(params: LoadZoneByIdRequest): Promise<LoadZoneByIdResponse | null>;
}
