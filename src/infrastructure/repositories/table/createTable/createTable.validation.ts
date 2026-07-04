import { Repository } from 'typeorm';
import { TableEntity } from '@infrastructure/entities/table.entity';
import { CreateTableRequest } from '@domain/models/table.model';
import { BadRequestException, ConflictException } from '@nestjs/common';

export class CreateTableValidation extends CreateTableRequest {
    constructor(private readonly tableRepository: Repository<TableEntity>) {
        super();
    }

    public async execute(params: CreateTableRequest): Promise<void> {
        try {
            await this.buildParams(params);
            await this.validateParams();
        } catch (error) {
            throw error;
        }
    }

    private async buildParams(params: CreateTableRequest): Promise<void> {
        this.number = params.number;
        this.zoneId = params.zoneId;
    }

    private async validateParams(): Promise<void> {
        if (!this.number || this.number.trim() === '') {
            throw new BadRequestException('Table number is required');
        }
        if (!this.zoneId) {
            throw new BadRequestException('Zone ID is required');
        }
        const exist = await this.tableRepository.findOne({ where: { number: this.number } });
        if (exist) {
            throw new ConflictException(`Table number "${this.number}" already exists`);
        }
    }
}
