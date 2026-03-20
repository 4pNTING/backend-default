import { QueryRunner } from 'typeorm';
import { ZoneEntity } from '@infrastructure/entities/zone.entity';
import { ZoneModel, CreateZoneRequest, CreateZoneResponse } from '@domain/models/zone.model';
import { ActiveStatus } from '@domain/enums/enum';

export class CreateZoneAction extends ZoneModel {
    constructor(private readonly session: QueryRunner) {
        super();
    }

    public async execute(params: CreateZoneRequest): Promise<CreateZoneResponse> {
        console.log('--- CreateZoneAction execute params ---', JSON.stringify(params));
        try {
            await this.validateAndBuildParams(params);
            await this.persistZone();

            return this.buildResponse();
        } catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }

    private async validateAndBuildParams(params: CreateZoneRequest): Promise<void> {
        try {
            this.name = params.name;
            this.isActive = params.isActive ?? ActiveStatus.active;

            this.createdAt = new Date();
            this.updatedAt = new Date();
        } catch (error) {
            throw new Error(`Failed to build parameters: ${error?.message}`);
        }
    }

    private async persistZone(): Promise<void> {
        try {
            const entity = this.session.manager.create(ZoneEntity, {
                name: this.name,
                isActive: this.isActive,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            });
            const savedEntity = await this.session.manager.save(ZoneEntity, entity);

            if (savedEntity) {
                this._id = (savedEntity as any)._id; 
            } else {
                throw new Error('Failed to save zone into database');
            }
        } catch (error) {
            throw new Error(`Failed to persist zone: ${error?.message}`);
        }
    }

    private buildResponse(): CreateZoneResponse {
        try {
            return {
                _id: this._id,
                name: this.name,
                isActive: this.isActive,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            };
        } catch (error) {
            throw new Error(`Failed to build response: ${error?.message}`);
        }
    }
}
