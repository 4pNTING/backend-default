import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { LoadStockHistoryRequest, LoadStockHistoryResponse } from '@domain/models/inventory.model';

export class LoadStockHistoryUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: LoadStockHistoryRequest): Promise<LoadStockHistoryResponse> {
        return await this.inventoryRepository.getStockHistory(params);
    }
}
