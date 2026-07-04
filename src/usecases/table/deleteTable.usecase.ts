import { ITableRepository } from '@domain/repositories/table.repository.interface';
import { DeleteTableRequest } from '@domain/models/table.model';

export class DeleteTableUseCase {
    constructor(private readonly tableRepository: ITableRepository) { }

    async execute(params: DeleteTableRequest): Promise<void> {
        return await this.tableRepository.delete(params);
    }
}
