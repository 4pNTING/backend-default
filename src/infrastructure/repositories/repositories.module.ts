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
  ],
  exports: [
    DatabaseCategoryRepository,
    DatabaseZoneRepository,
    DatabaseUserRepository,
  ],
})
export class RepositoriesModule { }