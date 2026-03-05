import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { InventoryLevelEntity } from '@infrastructure/entities/inventory-level.entity';
import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import {
    CreateInventoryLevelRequest,
    CreateInventoryLevelResponse,
    UpdateInventoryLevelRequest,
    LoadAllInventoryLevelResponse,
    LoadInventoryLevelByIdRequest,
    LoadInventoryLevelByIdResponse,
    LoadInventoryLevelByProductAndZoneRequest,
    LoadInventoryLevelByProductAndZoneResponse
} from '@domain/models/inventory-level.model';
import { QueryProps } from '@domain/models/query.model';

import { CreateInventoryLevelAction } from './createInventoryLevel/createInventoryLevel.action';
import { UpdateInventoryLevelAction } from './updateInventoryLevel/updateInventoryLevel.action';
import { LoadAllInventoryLevelAction } from './loadAllInventoryLevel/loadAllInventoryLevel.action';

@Injectable()
export class DatabaseInventoryLevelRepository implements IInventoryLevelRepository {
    constructor(
        @InjectRepository(InventoryLevelEntity)
        private readonly entityRepository: Repository<InventoryLevelEntity>,
        private readonly dataSource: DataSource,
    ) { }

    async create(params: CreateInventoryLevelRequest): Promise<CreateInventoryLevelResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new CreateInventoryLevelAction(session).execute(params);
            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async update(params: UpdateInventoryLevelRequest): Promise<void> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new UpdateInventoryLevelAction(session).execute(params);
            await session.commitTransaction();
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findAll(query: QueryProps): Promise<LoadAllInventoryLevelResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new LoadAllInventoryLevelAction(session).execute(query);
            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findById(params: LoadInventoryLevelByIdRequest): Promise<LoadInventoryLevelByIdResponse | null> {
        const entity = await this.entityRepository.findOne({
            where: { id: params.id },
            relations: ['product', 'zone']
        });
        if (!entity) return null;
        return {
            id: entity.id,
            productId: entity.productId,
            zoneId: entity.zoneId,
            quantity: entity.quantity,
            updatedAt: entity.updatedAt,
            product: entity.product,
            zone: entity.zone,
        };
    }

    async findByProductAndZone(params: LoadInventoryLevelByProductAndZoneRequest): Promise<LoadInventoryLevelByProductAndZoneResponse | null> {
        const entity = await this.entityRepository.findOne({
            where: { productId: params.productId, zoneId: params.zoneId },
            relations: ['product', 'zone']
        });
        if (!entity) return null;
        return {
            id: entity.id,
            productId: entity.productId,
            zoneId: entity.zoneId,
            quantity: entity.quantity,
            updatedAt: entity.updatedAt,
            product: entity.product,
            zone: entity.zone,
        };
    }
}
