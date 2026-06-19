import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { DatabaseCategoryRepository } from './category/category.repository';
import { ZoneEntity } from '../entities/zone.entity';
import { DatabaseZoneRepository } from './zone/zone.repository';
import { UserEntity } from '../entities/user.entity';
import { DatabaseUserRepository } from './user/user.repository';
import { CurrencyEntity } from '../entities/currency.entity';
import { DatabaseCurrencyRepository } from './currency/currency.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      ZoneEntity,
      UserEntity,
      CurrencyEntity,
    ]),
  ],
  providers: [
    DatabaseCategoryRepository,
    DatabaseZoneRepository,
    DatabaseUserRepository,
    DatabaseCurrencyRepository,
  ],
  exports: [
    DatabaseCategoryRepository,
    DatabaseZoneRepository,
    DatabaseUserRepository,
    DatabaseCurrencyRepository,
  ],
})
export class RepositoriesModule { }