import {
    CreateInventoryMovementRequest,
    CreateInventoryMovementResponse,
    LoadAllInventoryMovementResponse,
    LoadInventoryMovementByIdRequest,
    LoadInventoryMovementByIdResponse
} from '../models/inventory-movement.model';
import { QueryProps } from '../models/query.model';

export interface IInventoryMovementRepository {
    create(params: CreateInventoryMovementRequest): Promise<CreateInventoryMovementResponse>;
    findAll(query: QueryProps): Promise<LoadAllInventoryMovementResponse>;
    findById(params: LoadInventoryMovementByIdRequest): Promise<LoadInventoryMovementByIdResponse | null>;
}
