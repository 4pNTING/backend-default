import { ITableRepository } from '@domain/repositories/table.repository.interface';
import { LoadTableByZoneRequest, LoadTableByZoneResponse } from '@domain/models/table.model';

export class LoadTableByZoneUseCase {
    constructor(private readonly tableRepository: ITableRepository) { }

    async execute(params: LoadTableByZoneRequest): Promise<LoadTableByZoneResponse> {
        return await this.tableRepository.findByZone(params);
    }
}
