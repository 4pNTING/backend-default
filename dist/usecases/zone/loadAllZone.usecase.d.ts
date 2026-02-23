import { IZoneRepository } from '../../domain/repositories/zone.repository.interface';
import { QueryProps } from '../../domain/models/query.model';
import { LoadAllZoneResponse } from '../../domain/models/zone.model';
export declare class LoadAllZoneUsecase {
    private readonly zoneRepository;
    constructor(zoneRepository: IZoneRepository);
    execute(query: QueryProps): Promise<LoadAllZoneResponse>;
}
