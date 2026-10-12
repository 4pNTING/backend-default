import { Repository } from 'typeorm';
import { TableEntity } from '../../../entities/table.entity.js';
import { UpdateTableRequest } from '../../../../domain/models/table.model.js';
export declare class UpdateTableValidation extends UpdateTableRequest {
    private readonly tableRepository;
    constructor(tableRepository: Repository<TableEntity>);
    execute(params: UpdateTableRequest): Promise<void>;
    private buildParams;
    private validateParams;
}
