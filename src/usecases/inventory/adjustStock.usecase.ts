import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { AdjustStockRequest, AdjustStockResponse } from '@domain/models/inventory.model';

export class AdjustStockUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: AdjustStockRequest): Promise<AdjustStockResponse> {
        return await this.inventoryRepository.adjustStock(params);
    }
}
