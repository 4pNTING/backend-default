import { ITableRepository } from '@domain/repositories/table.repository.interface';
import { CreateTableRequest, CreateTableResponse } from '@domain/models/table.model';

export class CreateTableUseCase {
    constructor(private readonly tableRepository: ITableRepository) { }

    async execute(params: CreateTableRequest): Promise<CreateTableResponse> {
        return await this.tableRepository.create(params);
    }
}
