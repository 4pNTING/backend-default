import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';
import { CreateZoneRequest, CreateZoneResponse } from '../../domain/models/zone.model';
export declare class CreateZoneUsecase {
    private readonly zoneRepository;
    constructor(zoneRepository: IZoneRepository);
    execute(params: CreateZoneRequest): Promise<CreateZoneResponse>;
}
