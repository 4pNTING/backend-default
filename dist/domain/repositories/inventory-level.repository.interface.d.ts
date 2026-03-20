import { CreateInventoryLevelRequest, CreateInventoryLevelResponse, UpdateInventoryLevelRequest, LoadAllInventoryLevelResponse, LoadInventoryLevelByIdRequest, LoadInventoryLevelByIdResponse, LoadInventoryLevelByProductAndZoneRequest, LoadInventoryLevelByProductAndZoneResponse } from '../models/inventory-level.model';
import { QueryProps } from '../models/query.model';
export interface IInventoryLevelRepository {
    create(params: CreateInventoryLevelRequest): Promise<CreateInventoryLevelResponse>;
    update(params: UpdateInventoryLevelRequest): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllInventoryLevelResponse>;
    findById(params: LoadInventoryLevelByIdRequest): Promise<LoadInventoryLevelByIdResponse | null>;
    findByProductAndZone(params: LoadInventoryLevelByProductAndZoneRequest): Promise<LoadInventoryLevelByProductAndZoneResponse | null>;
}
