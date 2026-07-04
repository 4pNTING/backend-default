import { ITableRepository } from '@domain/repositories/table.repository.interface';
import { UpdateTableRequest } from '@domain/models/table.model';

export class UpdateTableUseCase {
    constructor(private readonly tableRepository: ITableRepository) { }

    async execute(params: UpdateTableRequest): Promise<void> {
        return await this.tableRepository.update(params);
    }
}
