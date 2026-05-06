import { DataSource, Repository } from 'typeorm';
import { InventoryLevelEntity } from '@infrastructure/entities/inventory-level.entity';
import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { CreateInventoryLevelRequest, CreateInventoryLevelResponse, UpdateInventoryLevelRequest, LoadAllInventoryLevelResponse, LoadInventoryLevelByIdRequest, LoadInventoryLevelByIdResponse, LoadInventoryLevelByProductAndZoneRequest, LoadInventoryLevelByProductAndZoneResponse } from '@domain/models/inventory-level.model';
import { QueryProps } from '../../../src/domain/models/query.model';
export declare class DatabaseInventoryLevelRepository implements IInventoryLevelRepository {
    private readonly entityRepository;
    private readonly dataSource;
    constructor(entityRepository: Repository<InventoryLevelEntity>, dataSource: DataSource);
    create(params: CreateInventoryLevelRequest): Promise<CreateInventoryLevelResponse>;
    update(params: UpdateInventoryLevelRequest): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllInventoryLevelResponse>;
    findById(params: LoadInventoryLevelByIdRequest): Promise<LoadInventoryLevelByIdResponse | null>;
    findByProductAndZone(params: LoadInventoryLevelByProductAndZoneRequest): Promise<LoadInventoryLevelByProductAndZoneResponse | null>;
}
