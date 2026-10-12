import { ITableRepository } from '../../domain/repositories/table.repository.interface.js';
import { DeleteTableRequest } from '../../domain/models/table.model.js';
export declare class DeleteTableUseCase {
    private readonly tableRepository;
    constructor(tableRepository: ITableRepository);
    execute(params: DeleteTableRequest): Promise<void>;
}
