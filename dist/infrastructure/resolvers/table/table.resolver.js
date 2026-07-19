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
exports.TableResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const table_model_1 = require("./table.model");
const table_usecases_proxy_module_1 = require("../../usecases-proxy/table-usecases-proxy.module");
const createTable_usecase_1 = require("../../../usecases/table/createTable.usecase");
const updateTable_usecase_1 = require("../../../usecases/table/updateTable.usecase");
const deleteTable_usecase_1 = require("../../../usecases/table/deleteTable.usecase");
const restoreTable_usecase_1 = require("../../../usecases/table/restoreTable.usecase");
const loadTable_usecase_1 = require("../../../usecases/table/loadTable.usecase");
const loadByIDTable_usecase_1 = require("../../../usecases/table/loadByIDTable.usecase");
let TableResolver = class TableResolver {
    constructor(createTableUseCase, updateTableUseCase, deleteTableUseCase, restoreTableUseCase, loadTableUseCase, loadTableByIdUseCase) {
        this.createTableUseCase = createTableUseCase;
        this.updateTableUseCase = updateTableUseCase;
        this.deleteTableUseCase = deleteTableUseCase;
        this.restoreTableUseCase = restoreTableUseCase;
        this.loadTableUseCase = loadTableUseCase;
        this.loadTableByIdUseCase = loadTableByIdUseCase;
    }
    async loadTable(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = { page: input.page, limit: input.limit };
            }
            if (input.keyword)
                query.search = { q: input.keyword };
            if (input.isActive)
                query.isActive = input.isActive;
            if (input.zoneId)
                query.zoneId = input.zoneId;
            if (input.sortField)
                query.sortField = input.sortField;
            if (input.sortDirection)
                query.sortDirection = input.sortDirection;
        }
        const result = await this.loadTableUseCase.execute(query);
        return { table: result.items, count: result.total };
    }
    async loadTableById(input) {
        const result = await this.loadTableByIdUseCase.execute({ _id: input._id });
        if (!result)
            return { table: null };
        return { table: result };
    }
    async createTable(input) {
        const result = await this.createTableUseCase.execute(input);
        return { table: result };
    }
    async updateTable(input) {
        await this.updateTableUseCase.execute(input);
        const updated = await this.loadTableByIdUseCase.execute({ _id: input._id });
        return { table: updated };
    }
    async deleteTable(input) {
        await this.deleteTableUseCase.execute(input);
        return { table: { _id: input._id } };
    }
    async restoreTable(input) {
        await this.restoreTableUseCase.execute(input._id);
        const result = await this.loadTableByIdUseCase.execute({ _id: input._id });
        return { table: result };
    }
};
exports.TableResolver = TableResolver;
__decorate([
    (0, graphql_1.Query)(() => table_model_1.LoadTableResponse, { name: 'loadTable' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_model_1.LoadTableDto]),
    __metadata("design:returntype", Promise)
], TableResolver.prototype, "loadTable", null);
__decorate([
    (0, graphql_1.Query)(() => table_model_1.LoadTableByIdResponse, { name: 'loadTableById', nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_model_1.LoadTableByIdDto]),
    __metadata("design:returntype", Promise)
], TableResolver.prototype, "loadTableById", null);
__decorate([
    (0, graphql_1.Mutation)(() => table_model_1.CreateTableResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_model_1.CreateTableDto]),
    __metadata("design:returntype", Promise)
], TableResolver.prototype, "createTable", null);
__decorate([
    (0, graphql_1.Mutation)(() => table_model_1.UpdateTableResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_model_1.UpdateTableDto]),
    __metadata("design:returntype", Promise)
], TableResolver.prototype, "updateTable", null);
__decorate([
    (0, graphql_1.Mutation)(() => table_model_1.DeleteTableResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_model_1.DeleteTableDto]),
    __metadata("design:returntype", Promise)
], TableResolver.prototype, "deleteTable", null);
__decorate([
    (0, graphql_1.Mutation)(() => table_model_1.RestoreTableResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_model_1.RestoreTableDto]),
    __metadata("design:returntype", Promise)
], TableResolver.prototype, "restoreTable", null);
exports.TableResolver = TableResolver = __decorate([
    (0, graphql_1.Resolver)(() => table_model_1.Table),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(table_usecases_proxy_module_1.TableUsecasesProxyModule.CREATE_TABLE_PROXY)),
    __param(1, (0, common_1.Inject)(table_usecases_proxy_module_1.TableUsecasesProxyModule.UPDATE_TABLE_PROXY)),
    __param(2, (0, common_1.Inject)(table_usecases_proxy_module_1.TableUsecasesProxyModule.DELETE_TABLE_PROXY)),
    __param(3, (0, common_1.Inject)(table_usecases_proxy_module_1.TableUsecasesProxyModule.RESTORE_TABLE_PROXY)),
    __param(4, (0, common_1.Inject)(table_usecases_proxy_module_1.TableUsecasesProxyModule.LOAD_TABLE_PROXY)),
    __param(5, (0, common_1.Inject)(table_usecases_proxy_module_1.TableUsecasesProxyModule.LOAD_BY_ID_TABLE_PROXY)),
    __metadata("design:paramtypes", [createTable_usecase_1.CreateTableUseCase,
        updateTable_usecase_1.UpdateTableUseCase,
        deleteTable_usecase_1.DeleteTableUseCase,
        restoreTable_usecase_1.RestoreTableUseCase,
        loadTable_usecase_1.LoadTableUseCase,
        loadByIDTable_usecase_1.LoadByIDTableUseCase])
], TableResolver);
//# sourceMappingURL=table.resolver.js.map