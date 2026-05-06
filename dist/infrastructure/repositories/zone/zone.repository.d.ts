import { Repository, DataSource } from 'typeorm';
import { ZoneEntity } from '../../entities/zone.entity';
import { IZoneRepository } from '../../../src/domain/repositories/zone.repository.interface';
import { CreateZoneRequest, CreateZoneResponse, UpdateZoneRequest, DeleteZoneRequest, LoadAllZoneResponse, LoadZoneByIdRequest, LoadZoneByIdResponse } from '../../../src/domain/models/zone.model';
import { QueryProps } from '../../../src/domain/models/query.model';
export declare class DatabaseZoneRepository implements IZoneRepository {
    private readonly zoneEntityRepository;
    private readonly dataSource;
    constructor(zoneEntityRepository: Repository<ZoneEntity>, dataSource: DataSource);
    create(params: CreateZoneRequest): Promise<CreateZoneResponse>;
    update(params: UpdateZoneRequest): Promise<void>;
    delete(params: DeleteZoneRequest): Promise<void>;
    restore(id: string): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllZoneResponse>;
    findById(params: LoadZoneByIdRequest): Promise<LoadZoneByIdResponse | null>;
    findByName(name: string): Promise<LoadZoneByIdResponse | null>;
}
