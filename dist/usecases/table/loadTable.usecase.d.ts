import { ITableRepository } from '../../domain/repositories/table.repository.interface.js';
import { LoadAllTableResponse } from '../../domain/models/table.model.js';
import { QueryProps } from '../../domain/models/query.model.js';
export declare class LoadTableUseCase {
    private readonly tableRepository;
    constructor(tableRepository: ITableRepository);
    execute(query: QueryProps): Promise<LoadAllTableResponse>;
}
