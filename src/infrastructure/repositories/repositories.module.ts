import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { DatabaseCategoryRepository } from './category/category.repository';
import { ZoneEntity } from '../entities/zone.entity';
import { DatabaseZoneRepository } from './zone/zone.repository';
import { UserEntity } from '../entities/user.entity';
import { DatabaseUserRepository } from './user/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, ZoneEntity, UserEntity]),
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