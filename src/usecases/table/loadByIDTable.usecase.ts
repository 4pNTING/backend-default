import { ITableRepository } from '@domain/repositories/table.repository.interface';
import { LoadTableByIdRequest, LoadTableByIdResponse } from '@domain/models/table.model';

export class LoadByIDTableUseCase {
    constructor(private readonly tableRepository: ITableRepository) { }

    async execute(params: LoadTableByIdRequest): Promise<LoadTableByIdResponse | null> {
        return await this.tableRepository.findById(params);
    }
}
