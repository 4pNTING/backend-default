import { DataSource, Repository } from 'typeorm';
import { InventoryMovementEntity } from '@infrastructure/entities/inventory-movement.entity';
import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import { CreateInventoryMovementRequest, CreateInventoryMovementResponse, LoadAllInventoryMovementResponse, LoadInventoryMovementByIdRequest, LoadInventoryMovementByIdResponse } from '@domain/models/inventory-movement.model';
import { QueryProps } from '@domain/models/query.model';
export declare class DatabaseInventoryMovementRepository implements IInventoryMovementRepository {
    private readonly entityRepository;
    private readonly dataSource;
    constructor(entityRepository: Repository<InventoryMovementEntity>, dataSource: DataSource);
    create(params: CreateInventoryMovementRequest): Promise<CreateInventoryMovementResponse>;
    findAll(query: QueryProps): Promise<LoadAllInventoryMovementResponse>;
    findById(params: LoadInventoryMovementByIdRequest): Promise<LoadInventoryMovementByIdResponse | null>;
}
