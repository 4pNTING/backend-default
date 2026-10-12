import { ITableRepository } from '../../domain/repositories/table.repository.interface.js';
import { CreateTableRequest, CreateTableResponse } from '../../domain/models/table.model.js';
export declare class CreateTableUseCase {
    private readonly tableRepository;
    constructor(tableRepository: ITableRepository);
    execute(params: CreateTableRequest): Promise<CreateTableResponse>;
}
