"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../entities/category.entity");
const category_repository_1 = require("./category/category.repository");
const zone_entity_1 = require("../entities/zone.entity");
const zone_repository_1 = require("./zone/zone.repository");
const user_entity_1 = require("../entities/user.entity");
const user_repository_1 = require("./user/user.repository");
const product_entity_1 = require("../entities/product.entity");
const inventory_level_entity_1 = require("../entities/inventory-level.entity");
const inventory_movement_entity_1 = require("../entities/inventory-movement.entity");
const product_repository_1 = require("./product/product.repository");
const inventory_level_repository_1 = require("./inventory-level/inventory-level.repository");
const inventory_movement_repository_1 = require("./inventory-movement/inventory-movement.repository");
let RepositoriesModule = class RepositoriesModule {
};
exports.RepositoriesModule = RepositoriesModule;
exports.RepositoriesModule = RepositoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                category_entity_1.CategoryEntity,
                zone_entity_1.ZoneEntity,
                user_entity_1.UserEntity,
                product_entity_1.ProductEntity,
                inventory_level_entity_1.InventoryLevelEntity,
                inventory_movement_entity_1.InventoryMovementEntity
            ]),
        ],
        providers: [
            category_repository_1.DatabaseCategoryRepository,
            zone_repository_1.DatabaseZoneRepository,
            user_repository_1.DatabaseUserRepository,
            product_repository_1.DatabaseProductRepository,
            inventory_level_repository_1.DatabaseInventoryLevelRepository,
            inventory_movement_repository_1.DatabaseInventoryMovementRepository,
        ],
        exports: [
            category_repository_1.DatabaseCategoryRepository,
            zone_repository_1.DatabaseZoneRepository,
            user_repository_1.DatabaseUserRepository,
            product_repository_1.DatabaseProductRepository,
            inventory_level_repository_1.DatabaseInventoryLevelRepository,
            inventory_movement_repository_1.DatabaseInventoryMovementRepository,
        ],
    })
], RepositoriesModule);
//# sourceMappingURL=repositories.module.js.map