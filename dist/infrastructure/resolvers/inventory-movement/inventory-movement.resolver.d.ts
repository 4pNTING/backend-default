import { CreateInventoryMovementDto, LoadInventoryMovementDto, LoadInventoryMovementByIdDto } from './inventory-movement.model';
import { CreateInventoryMovementUseCase } from '../../../usecases/inventory-movement/createInventoryMovement.usecase';
import { LoadInventoryMovementUseCase } from '../../../usecases/inventory-movement/loadInventoryMovement.usecase';
import { LoadInventoryMovementByIdUseCase } from '../../../usecases/inventory-movement/loadInventoryMovementById.usecase';
export declare class InventoryMovementResolver {
    private readonly createInventoryMovementUseCase;
    private readonly loadInventoryMovementUseCase;
    private readonly loadInventoryMovementByIdUseCase;
    constructor(createInventoryMovementUseCase: CreateInventoryMovementUseCase, loadInventoryMovementUseCase: LoadInventoryMovementUseCase, loadInventoryMovementByIdUseCase: LoadInventoryMovementByIdUseCase);
    loadInventoryMovement(input: LoadInventoryMovementDto): Promise<{
        count: number;
        inventoryMovement: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            type: import("../../../domain/enums/enum").InventoryMovementType;
            quantity: number;
            note?: string;
            userId?: string;
            createdAt?: Date;
        }[];
    }>;
    loadInventoryMovementById(input: LoadInventoryMovementByIdDto): Promise<{
        inventoryMovement: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            type: import("../../../domain/enums/enum").InventoryMovementType;
            quantity: number;
            note?: string;
            userId?: string;
            createdAt?: Date;
        };
    }>;
    createInventoryMovement(input: CreateInventoryMovementDto): Promise<{
        inventoryMovement: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            type: import("../../../domain/enums/enum").InventoryMovementType;
            quantity: number;
            note?: string;
            userId?: string;
            createdAt?: Date;
        };
    }>;
}
