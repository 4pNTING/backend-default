import { ITableRepository } from '../../domain/repositories/table.repository.interface.js';
import { UpdateTableRequest } from '../../domain/models/table.model.js';
export declare class UpdateTableUseCase {
    private readonly tableRepository;
    constructor(tableRepository: ITableRepository);
    execute(params: UpdateTableRequest): Promise<void>;
}
