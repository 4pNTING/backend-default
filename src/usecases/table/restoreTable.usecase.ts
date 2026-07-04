import { ITableRepository } from '@domain/repositories/table.repository.interface';

export class RestoreTableUseCase {
    constructor(private readonly tableRepository: ITableRepository) { }

    async execute(_id: string): Promise<void> {
        return await this.tableRepository.restore(_id);
    }
}
