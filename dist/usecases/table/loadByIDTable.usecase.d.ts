import { ITableRepository } from '../../domain/repositories/table.repository.interface.js';
import { LoadTableByIdRequest, LoadTableByIdResponse } from '../../domain/models/table.model.js';
export declare class LoadByIDTableUseCase {
    private readonly tableRepository;
    constructor(tableRepository: ITableRepository);
    execute(params: LoadTableByIdRequest): Promise<LoadTableByIdResponse | null>;
}
