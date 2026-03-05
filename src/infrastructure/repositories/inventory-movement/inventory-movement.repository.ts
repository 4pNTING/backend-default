import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { InventoryMovementEntity } from '@infrastructure/entities/inventory-movement.entity';
import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import {
    CreateInventoryMovementRequest,
    CreateInventoryMovementResponse,
    LoadAllInventoryMovementResponse,
    LoadInventoryMovementByIdRequest,
    LoadInventoryMovementByIdResponse
} from '@domain/models/inventory-movement.model';
import { QueryProps } from '@domain/models/query.model';

import { CreateInventoryMovementAction } from './createInventoryMovement/createInventoryMovement.action';
import { LoadAllInventoryMovementAction } from './loadAllInventoryMovement/loadAllInventoryMovement.action';

@Injectable()
export class DatabaseInventoryMovementRepository implements IInventoryMovementRepository {
    constructor(
        @InjectRepository(InventoryMovementEntity)
        private readonly entityRepository: Repository<InventoryMovementEntity>,
        private readonly dataSource: DataSource,
    ) { }

    async create(params: CreateInventoryMovementRequest): Promise<CreateInventoryMovementResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new CreateInventoryMovementAction(session).execute(params);
            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findAll(query: QueryProps): Promise<LoadAllInventoryMovementResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new LoadAllInventoryMovementAction(session).execute(query);
            await session.commitTransaction();
            return result;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findById(params: LoadInventoryMovementByIdRequest): Promise<LoadInventoryMovementByIdResponse | null> {
        const entity = await this.entityRepository.findOne({
            where: { id: params.id }
        });
        if (!entity) return null;
        return {
            id: entity.id,
            productId: entity.productId,
            zoneId: entity.zoneId,
            type: entity.type,
            quantity: entity.quantity,
            note: entity.note,
            userId: entity.userId,
            createdAt: entity.createdAt,
        };
    }
}
