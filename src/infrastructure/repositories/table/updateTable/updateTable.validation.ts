import { Repository } from 'typeorm';
import { TableEntity } from '@infrastructure/entities/table.entity';
import { UpdateTableRequest } from '@domain/models/table.model';
import { BadRequestException, NotFoundException } from '@nestjs/common';

export class UpdateTableValidation extends UpdateTableRequest {
    constructor(private readonly tableRepository: Repository<TableEntity>) {
        super();
    }

    public async execute(params: UpdateTableRequest): Promise<void> {
        try {
            await this.buildParams(params);
            await this.validateParams();
        } catch (error) {
            throw error;
        }
    }

    private async buildParams(params: UpdateTableRequest): Promise<void> {
        this._id    = params._id;
        this.number = params.number;
    }

    private async validateParams(): Promise<void> {
        if (!this._id) {
            throw new BadRequestException('Table ID is required');
        }
        const exist = await this.tableRepository.findOne({ where: { _id: this._id } });
        if (!exist) {
            throw new NotFoundException(`Table not found`);
        }
        if (this.number) {
            const duplicate = await this.tableRepository.findOne({ where: { number: this.number } });
            if (duplicate && duplicate._id !== this._id) {
                throw new BadRequestException(`Table number "${this.number}" already exists`);
            }
        }
    }
}
