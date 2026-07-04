import { ITableRepository } from '@domain/repositories/table.repository.interface';
import { LoadAllTableResponse } from '@domain/models/table.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadTableUseCase {
    constructor(private readonly tableRepository: ITableRepository) { }

    async execute(query: QueryProps): Promise<LoadAllTableResponse> {
        return await this.tableRepository.findAll(query);
    }
}
