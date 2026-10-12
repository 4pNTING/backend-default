import { ITableRepository } from '../../domain/repositories/table.repository.interface.js';
import { LoadTableByZoneRequest, LoadTableByZoneResponse } from '../../domain/models/table.model.js';
export declare class LoadTableByZoneUseCase {
    private readonly tableRepository;
    constructor(tableRepository: ITableRepository);
    execute(params: LoadTableByZoneRequest): Promise<LoadTableByZoneResponse>;
}
