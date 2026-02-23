"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const zone_usecases_proxy_module_1 = require("../../usecases-proxy/zone-usecases-proxy.module");
const createZone_usecase_1 = require("../../../usecases/zone/createZone.usecase");
const updateZone_usecase_1 = require("../../../usecases/zone/updateZone.usecase");
const deleteZone_usecase_1 = require("../../../usecases/zone/deleteZone.usecase");
const loadAllZone_usecase_1 = require("../../../usecases/zone/loadAllZone.usecase");
const loadZoneById_usecase_1 = require("../../../usecases/zone/loadZoneById.usecase");
const restoreZone_usecase_1 = require("../../../usecases/zone/restoreZone.usecase");
const zone_model_1 = require("./zone.model");
let ZoneResolver = class ZoneResolver {
    constructor(createZoneUsecase, updateZoneUsecase, deleteZoneUsecase, loadAllZoneUsecase, loadZoneByIdUsecase, restoreZoneUsecase) {
        this.createZoneUsecase = createZoneUsecase;
        this.updateZoneUsecase = updateZoneUsecase;
        this.deleteZoneUsecase = deleteZoneUsecase;
        this.loadAllZoneUsecase = loadAllZoneUsecase;
        this.loadZoneByIdUsecase = loadZoneByIdUsecase;
        this.restoreZoneUsecase = restoreZoneUsecase;
    }
    async loadZone(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page || 1,
                    limit: input.limit || 10
                };
            }
            if (input.keyword) {
                query.search = {
                    q: input.keyword
                };
            }
            if (input.isActive) {
                query.condition = [{
                        field: 'isActive',
                        value: input.isActive
                    }];
            }
        }
        const result = await this.loadAllZoneUsecase.execute(query);
        const items = result.items.map(item => ({
            ...item,
            _id: item.id
        }));
        return {
            count: result.total,
            zone: items,
        };
    }
    async loadZoneById(input) {
        const result = await this.loadZoneByIdUsecase.execute({ id: input._id });
        if (!result)
            return { zone: null };
        return { zone: { ...result, _id: result.id } };
    }
    async createZone(input) {
        const result = await this.createZoneUsecase.execute(input);
        return { zone: { ...result, _id: result.id } };
    }
    async updateZone(input) {
        await this.updateZoneUsecase.execute({
            id: input._id,
            name: input.name,
            description: input.description,
            isActive: input.isActive
        });
        const updated = await this.loadZoneByIdUsecase.execute({ id: input._id });
        return { zone: updated ? { ...updated, _id: updated.id } : null };
    }
    async deleteZone(input) {
        await this.deleteZoneUsecase.execute({ id: input._id });
        return { zone: { _id: input._id } };
    }
    async restoreZone(input) {
        await this.restoreZoneUsecase.execute(input._id);
        const restored = await this.loadZoneByIdUsecase.execute({ id: input._id });
        return { zone: restored ? { ...restored, _id: restored.id } : null };
    }
};
exports.ZoneResolver = ZoneResolver;
__decorate([
    (0, graphql_1.Query)(() => zone_model_1.LoadZoneResponse, { name: 'loadZone' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [zone_model_1.LoadZoneDto]),
    __metadata("design:returntype", Promise)
], ZoneResolver.prototype, "loadZone", null);
__decorate([
    (0, graphql_1.Query)(() => zone_model_1.LoadZoneByIdResponse, { name: 'loadZoneById' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [zone_model_1.LoadZoneByIdDto]),
    __metadata("design:returntype", Promise)
], ZoneResolver.prototype, "loadZoneById", null);
__decorate([
    (0, graphql_1.Mutation)(() => zone_model_1.CreateZoneResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [zone_model_1.CreateZoneDto]),
    __metadata("design:returntype", Promise)
], ZoneResolver.prototype, "createZone", null);
__decorate([
    (0, graphql_1.Mutation)(() => zone_model_1.UpdateZoneResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [zone_model_1.UpdateZoneDto]),
    __metadata("design:returntype", Promise)
], ZoneResolver.prototype, "updateZone", null);
__decorate([
    (0, graphql_1.Mutation)(() => zone_model_1.DeleteZoneResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [zone_model_1.DeleteZoneDto]),
    __metadata("design:returntype", Promise)
], ZoneResolver.prototype, "deleteZone", null);
__decorate([
    (0, graphql_1.Mutation)(() => zone_model_1.RestoreZoneResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [zone_model_1.RestoreZoneDto]),
    __metadata("design:returntype", Promise)
], ZoneResolver.prototype, "restoreZone", null);
exports.ZoneResolver = ZoneResolver = __decorate([
    (0, graphql_1.Resolver)(() => zone_model_1.Zone),
    __param(0, (0, common_1.Inject)(zone_usecases_proxy_module_1.ZoneUsecasesProxyModule.CREATE_ZONE_PROXY)),
    __param(1, (0, common_1.Inject)(zone_usecases_proxy_module_1.ZoneUsecasesProxyModule.UPDATE_ZONE_PROXY)),
    __param(2, (0, common_1.Inject)(zone_usecases_proxy_module_1.ZoneUsecasesProxyModule.DELETE_ZONE_PROXY)),
    __param(3, (0, common_1.Inject)(zone_usecases_proxy_module_1.ZoneUsecasesProxyModule.LOAD_ALL_ZONE_PROXY)),
    __param(4, (0, common_1.Inject)(zone_usecases_proxy_module_1.ZoneUsecasesProxyModule.LOAD_BY_ID_ZONE_PROXY)),
    __param(5, (0, common_1.Inject)(zone_usecases_proxy_module_1.ZoneUsecasesProxyModule.RESTORE_ZONE_PROXY)),
    __metadata("design:paramtypes", [createZone_usecase_1.CreateZoneUsecase,
        updateZone_usecase_1.UpdateZoneUsecase,
        deleteZone_usecase_1.DeleteZoneUsecase,
        loadAllZone_usecase_1.LoadAllZoneUsecase,
        loadZoneById_usecase_1.LoadZoneByIdUsecase,
        restoreZone_usecase_1.RestoreZoneUsecase])
], ZoneResolver);
//# sourceMappingURL=zone.resolver.js.map