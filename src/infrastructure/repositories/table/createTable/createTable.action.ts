import { QueryRunner } from 'typeorm';
import { TableEntity } from '@infrastructure/entities/table.entity';
import { TableModel, CreateTableRequest, CreateTableResponse } from '@domain/models/table.model';
import { ActiveStatus, TableStatus } from '@domain/enums/enum';

export class CreateTableAction extends TableModel {
    constructor(private readonly session: QueryRunner) {
        super();
    }

    public async execute(params: CreateTableRequest): Promise<CreateTableResponse> {
        try {
            await this.validateAndBuildParams(params);
            await this.persistTable();
            return this.buildResponse();
        } catch (error) {
            console.error('ERROR CreateTableAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }

    private async validateAndBuildParams(params: CreateTableRequest): Promise<void> {
        this.number   = params.number;
        this.zoneId   = params.zoneId;
        this.capacity = params.capacity ?? 2;
        this.status   = params.status   ?? TableStatus.available;
        this.isActive = params.isActive  ?? ActiveStatus.active;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    private async persistTable(): Promise<void> {
        try {
            const entity = this.session.manager.create(TableEntity, {
                number:   this.number,
                zoneId:   this.zoneId,
                capacity: this.capacity,
                status:   this.status,
                isActive: this.isActive,
            });
            const saved = await this.session.manager.save(TableEntity, entity);
            if (saved) {
                this._id = (saved as any)._id;
            } else {
                throw new Error('Failed to save table into database');
            }
        } catch (error) {
            console.error('ERROR persistTable', error?.message);
            throw new Error(`Failed to persist table: ${error?.message}`);
        }
    }

    private buildResponse(): CreateTableResponse {
        return {
            _id:       this._id,
            uniqueId:  this.uniqueId,
            uid:       this.uid,
            number:    this.number,
            zoneId:    this.zoneId,
            capacity:  this.capacity,
            status:    this.status,
            isActive:  this.isActive,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
