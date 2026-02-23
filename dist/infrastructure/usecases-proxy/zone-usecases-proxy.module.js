"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ZoneUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const zone_repository_1 = require("../repositories/zone/zone.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createZone_usecase_1 = require("../../usecases/zone/createZone.usecase");
const updateZone_usecase_1 = require("../../usecases/zone/updateZone.usecase");
const deleteZone_usecase_1 = require("../../usecases/zone/deleteZone.usecase");
const loadAllZone_usecase_1 = require("../../usecases/zone/loadAllZone.usecase");
const loadZoneById_usecase_1 = require("../../usecases/zone/loadZoneById.usecase");
const restoreZone_usecase_1 = require("../../usecases/zone/restoreZone.usecase");
let ZoneUsecasesProxyModule = ZoneUsecasesProxyModule_1 = class ZoneUsecasesProxyModule {
    static register() {
        return {
            module: ZoneUsecasesProxyModule_1,
            providers: [
                {
                    inject: [zone_repository_1.DatabaseZoneRepository],
                    provide: ZoneUsecasesProxyModule_1.CREATE_ZONE_PROXY,
                    useFactory: (repo) => new createZone_usecase_1.CreateZoneUsecase(repo),
                },
                {
                    inject: [zone_repository_1.DatabaseZoneRepository],
                    provide: ZoneUsecasesProxyModule_1.UPDATE_ZONE_PROXY,
                    useFactory: (repo) => new updateZone_usecase_1.UpdateZoneUsecase(repo),
                },
                {
                    inject: [zone_repository_1.DatabaseZoneRepository],
                    provide: ZoneUsecasesProxyModule_1.DELETE_ZONE_PROXY,
                    useFactory: (repo) => new deleteZone_usecase_1.DeleteZoneUsecase(repo),
                },
                {
                    inject: [zone_repository_1.DatabaseZoneRepository],
                    provide: ZoneUsecasesProxyModule_1.LOAD_ALL_ZONE_PROXY,
                    useFactory: (repo) => new loadAllZone_usecase_1.LoadAllZoneUsecase(repo),
                },
                {
                    inject: [zone_repository_1.DatabaseZoneRepository],
                    provide: ZoneUsecasesProxyModule_1.LOAD_BY_ID_ZONE_PROXY,
                    useFactory: (repo) => new loadZoneById_usecase_1.LoadZoneByIdUsecase(repo),
                },
                {
                    inject: [zone_repository_1.DatabaseZoneRepository],
                    provide: ZoneUsecasesProxyModule_1.RESTORE_ZONE_PROXY,
                    useFactory: (repo) => new restoreZone_usecase_1.RestoreZoneUsecase(repo),
                },
            ],
            exports: [
                ZoneUsecasesProxyModule_1.CREATE_ZONE_PROXY,
                ZoneUsecasesProxyModule_1.UPDATE_ZONE_PROXY,
                ZoneUsecasesProxyModule_1.DELETE_ZONE_PROXY,
                ZoneUsecasesProxyModule_1.LOAD_ALL_ZONE_PROXY,
                ZoneUsecasesProxyModule_1.LOAD_BY_ID_ZONE_PROXY,
                ZoneUsecasesProxyModule_1.RESTORE_ZONE_PROXY,
            ],
        };
    }
};
exports.ZoneUsecasesProxyModule = ZoneUsecasesProxyModule;
ZoneUsecasesProxyModule.CREATE_ZONE_PROXY = 'CreateZoneProxy';
ZoneUsecasesProxyModule.UPDATE_ZONE_PROXY = 'UpdateZoneProxy';
ZoneUsecasesProxyModule.DELETE_ZONE_PROXY = 'DeleteZoneProxy';
ZoneUsecasesProxyModule.LOAD_ALL_ZONE_PROXY = 'LoadAllZoneProxy';
ZoneUsecasesProxyModule.LOAD_BY_ID_ZONE_PROXY = 'LoadByIdZoneProxy';
ZoneUsecasesProxyModule.RESTORE_ZONE_PROXY = 'RestoreZoneProxy';
exports.ZoneUsecasesProxyModule = ZoneUsecasesProxyModule = ZoneUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], ZoneUsecasesProxyModule);
//# sourceMappingURL=zone-usecases-proxy.module.js.map