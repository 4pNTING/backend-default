import { LoadInventoryLevelDto, LoadInventoryLevelByIdDto, LoadInventoryLevelByProductAndZoneDto, CreateInventoryLevelDto, UpdateInventoryLevelDto } from './inventory-level.model';
import { LoadInventoryLevelUseCase } from '../../../usecases/inventory-level/loadInventoryLevel.usecase';
import { LoadInventoryLevelByIdUseCase } from '../../../usecases/inventory-level/loadInventoryLevelById.usecase';
import { LoadInventoryLevelByProductAndZoneUseCase } from '../../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase';
import { CreateInventoryLevelUseCase } from '../../../usecases/inventory-level/createInventoryLevel.usecase';
import { UpdateInventoryLevelUseCase } from '../../../usecases/inventory-level/updateInventoryLevel.usecase';
export declare class InventoryLevelResolver {
    private readonly loadInventoryLevelUseCase;
    private readonly loadInventoryLevelByIdUseCase;
    private readonly loadInventoryLevelByProductAndZoneUseCase;
    private readonly createInventoryLevelUseCase;
    private readonly updateInventoryLevelUseCase;
    constructor(loadInventoryLevelUseCase: LoadInventoryLevelUseCase, loadInventoryLevelByIdUseCase: LoadInventoryLevelByIdUseCase, loadInventoryLevelByProductAndZoneUseCase: LoadInventoryLevelByProductAndZoneUseCase, createInventoryLevelUseCase: CreateInventoryLevelUseCase, updateInventoryLevelUseCase: UpdateInventoryLevelUseCase);
    loadInventoryLevel(input: LoadInventoryLevelDto): Promise<{
        count: number;
        inventoryLevel: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            quantity: number;
            updatedAt?: Date;
            product?: any;
            zone?: any;
        }[];
    }>;
    loadInventoryLevelById(input: LoadInventoryLevelByIdDto): Promise<{
        inventoryLevel: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            quantity: number;
            updatedAt?: Date;
            product?: any;
            zone?: any;
        };
    }>;
    loadInventoryLevelByProductAndZone(input: LoadInventoryLevelByProductAndZoneDto): Promise<{
        inventoryLevel: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            quantity: number;
            updatedAt?: Date;
            product?: any;
            zone?: any;
        };
    }>;
    createInventoryLevel(input: CreateInventoryLevelDto): Promise<{
        inventoryLevel: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            quantity: number;
            updatedAt?: Date;
            product?: any;
            zone?: any;
        };
    }>;
    updateInventoryLevel(input: UpdateInventoryLevelDto): Promise<{
        inventoryLevel: {
            _id: string;
            id: string;
            productId: string;
            zoneId: string;
            quantity: number;
            updatedAt?: Date;
            product?: any;
            zone?: any;
        };
    }>;
}
