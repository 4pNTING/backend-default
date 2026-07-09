"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TableUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const table_repository_1 = require("../repositories/table/table.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createTable_usecase_1 = require("../../usecases/table/createTable.usecase");
const updateTable_usecase_1 = require("../../usecases/table/updateTable.usecase");
const deleteTable_usecase_1 = require("../../usecases/table/deleteTable.usecase");
const restoreTable_usecase_1 = require("../../usecases/table/restoreTable.usecase");
const loadTable_usecase_1 = require("../../usecases/table/loadTable.usecase");
const loadByIDTable_usecase_1 = require("../../usecases/table/loadByIDTable.usecase");
const loadTableByZone_usecase_1 = require("../../usecases/table/loadTableByZone.usecase");
let TableUsecasesProxyModule = TableUsecasesProxyModule_1 = class TableUsecasesProxyModule {
    static register() {
        return {
            module: TableUsecasesProxyModule_1,
            providers: [
                {
                    inject: [table_repository_1.DatabaseTableRepository],
                    provide: TableUsecasesProxyModule_1.CREATE_TABLE_PROXY,
                    useFactory: (repo) => new createTable_usecase_1.CreateTableUseCase(repo),
                },
                {
                    inject: [table_repository_1.DatabaseTableRepository],
                    provide: TableUsecasesProxyModule_1.UPDATE_TABLE_PROXY,
                    useFactory: (repo) => new updateTable_usecase_1.UpdateTableUseCase(repo),
                },
                {
                    inject: [table_repository_1.DatabaseTableRepository],
                    provide: TableUsecasesProxyModule_1.DELETE_TABLE_PROXY,
                    useFactory: (repo) => new deleteTable_usecase_1.DeleteTableUseCase(repo),
                },
                {
                    inject: [table_repository_1.DatabaseTableRepository],
                    provide: TableUsecasesProxyModule_1.RESTORE_TABLE_PROXY,
                    useFactory: (repo) => new restoreTable_usecase_1.RestoreTableUseCase(repo),
                },
                {
                    inject: [table_repository_1.DatabaseTableRepository],
                    provide: TableUsecasesProxyModule_1.LOAD_TABLE_PROXY,
                    useFactory: (repo) => new loadTable_usecase_1.LoadTableUseCase(repo),
                },
                {
                    inject: [table_repository_1.DatabaseTableRepository],
                    provide: TableUsecasesProxyModule_1.LOAD_BY_ID_TABLE_PROXY,
                    useFactory: (repo) => new loadByIDTable_usecase_1.LoadByIDTableUseCase(repo),
                },
                {
                    inject: [table_repository_1.DatabaseTableRepository],
                    provide: TableUsecasesProxyModule_1.LOAD_TABLE_BY_ZONE_PROXY,
                    useFactory: (repo) => new loadTableByZone_usecase_1.LoadTableByZoneUseCase(repo),
                },
            ],
            exports: [
                TableUsecasesProxyModule_1.CREATE_TABLE_PROXY,
                TableUsecasesProxyModule_1.UPDATE_TABLE_PROXY,
                TableUsecasesProxyModule_1.DELETE_TABLE_PROXY,
                TableUsecasesProxyModule_1.RESTORE_TABLE_PROXY,
                TableUsecasesProxyModule_1.LOAD_TABLE_PROXY,
                TableUsecasesProxyModule_1.LOAD_BY_ID_TABLE_PROXY,
                TableUsecasesProxyModule_1.LOAD_TABLE_BY_ZONE_PROXY,
            ],
        };
    }
};
exports.TableUsecasesProxyModule = TableUsecasesProxyModule;
TableUsecasesProxyModule.CREATE_TABLE_PROXY = 'CreateTableProxy';
TableUsecasesProxyModule.UPDATE_TABLE_PROXY = 'UpdateTableProxy';
TableUsecasesProxyModule.DELETE_TABLE_PROXY = 'DeleteTableProxy';
TableUsecasesProxyModule.RESTORE_TABLE_PROXY = 'RestoreTableProxy';
TableUsecasesProxyModule.LOAD_TABLE_PROXY = 'LoadTableProxy';
TableUsecasesProxyModule.LOAD_BY_ID_TABLE_PROXY = 'LoadByIDTableProxy';
TableUsecasesProxyModule.LOAD_TABLE_BY_ZONE_PROXY = 'LoadTableByZoneProxy';
exports.TableUsecasesProxyModule = TableUsecasesProxyModule = TableUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], TableUsecasesProxyModule);
//# sourceMappingURL=table-usecases-proxy.module.js.map