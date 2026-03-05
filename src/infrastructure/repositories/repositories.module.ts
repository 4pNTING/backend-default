import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { DatabaseCategoryRepository } from './category/category.repository';
import { ZoneEntity } from '../entities/zone.entity';
import { DatabaseZoneRepository } from './zone/zone.repository';
import { UserEntity } from '../entities/user.entity';
import { DatabaseUserRepository } from './user/user.repository';
import { ProductEntity } from '../entities/product.entity';
import { InventoryLevelEntity } from '../entities/inventory-level.entity';
import { InventoryMovementEntity } from '../entities/inventory-movement.entity';
import { DatabaseProductRepository } from './product/product.repository';
import { DatabaseInventoryLevelRepository } from './inventory-level/inventory-level.repository';
import { DatabaseInventoryMovementRepository } from './inventory-movement/inventory-movement.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      ZoneEntity,
      UserEntity,
      ProductEntity,
      InventoryLevelEntity,
      InventoryMovementEntity
    ]),
  ],
  providers: [
    DatabaseCategoryRepository,
    DatabaseZoneRepository,
    DatabaseUserRepository,
    DatabaseProductRepository,
    DatabaseInventoryLevelRepository,
    DatabaseInventoryMovementRepository,
  ],
  exports: [
    DatabaseCategoryRepository,
    DatabaseZoneRepository,
    DatabaseUserRepository,
    DatabaseProductRepository,
    DatabaseInventoryLevelRepository,
    DatabaseInventoryMovementRepository,
  ],
})
export class RepositoriesModule { }