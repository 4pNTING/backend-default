import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    Table, LoadTableResponse, LoadTableByIdResponse,
    CreateTableDto, UpdateTableDto, LoadTableDto,
    LoadTableByIdDto, DeleteTableDto, RestoreTableDto,
    CreateTableResponse, UpdateTableResponse,
    DeleteTableResponse, RestoreTableResponse,
} from './table.model';
import { TableUsecasesProxyModule } from '../../usecases-proxy/table-usecases-proxy.module';
import { CreateTableUseCase }     from '../../../usecases/table/createTable.usecase';
import { UpdateTableUseCase }     from '../../../usecases/table/updateTable.usecase';
import { DeleteTableUseCase }     from '../../../usecases/table/deleteTable.usecase';
import { RestoreTableUseCase }    from '../../../usecases/table/restoreTable.usecase';
import { LoadTableUseCase }       from '../../../usecases/table/loadTable.usecase';
import { LoadByIDTableUseCase }   from '../../../usecases/table/loadByIDTable.usecase';

@Resolver(() => Table)
@UseGuards(JwtAuthGuard)
export class TableResolver {
    constructor(
        @Inject(TableUsecasesProxyModule.CREATE_TABLE_PROXY)
        private readonly createTableUseCase: CreateTableUseCase,

        @Inject(TableUsecasesProxyModule.UPDATE_TABLE_PROXY)
        private readonly updateTableUseCase: UpdateTableUseCase,

        @Inject(TableUsecasesProxyModule.DELETE_TABLE_PROXY)
        private readonly deleteTableUseCase: DeleteTableUseCase,

        @Inject(TableUsecasesProxyModule.RESTORE_TABLE_PROXY)
        private readonly restoreTableUseCase: RestoreTableUseCase,

        @Inject(TableUsecasesProxyModule.LOAD_TABLE_PROXY)
        private readonly loadTableUseCase: LoadTableUseCase,

        @Inject(TableUsecasesProxyModule.LOAD_BY_ID_TABLE_PROXY)
        private readonly loadTableByIdUseCase: LoadByIDTableUseCase,
    ) { }

    // ─── QUERIES ──────────────────────────────────────────

    @Query(() => LoadTableResponse, { name: 'loadTable' })
    async loadTable(@Args('input', { nullable: true }) input: LoadTableDto) {
        const query: any = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = { page: input.page, limit: input.limit };
            }
            if (input.keyword) query.search = { q: input.keyword };
            if (input.isActive) query.isActive = input.isActive;
            if (input.zoneId)   query.zoneId   = input.zoneId;
            if (input.sortField) query.sortField = input.sortField;
            if (input.sortDirection) query.sortDirection = input.sortDirection;
        }
        const result = await this.loadTableUseCase.execute(query);
        return { table: result.items };
    }

    @Query(() => LoadTableByIdResponse, { name: 'loadTableById', nullable: true })
    async loadTableById(@Args('input') input: LoadTableByIdDto) {
        const result = await this.loadTableByIdUseCase.execute({ _id: input._id });
        if (!result) return { table: null };
        return { table: result };
    }

    // ─── MUTATIONS ────────────────────────────────────────

    @Mutation(() => CreateTableResponse)
    async createTable(@Args('input') input: CreateTableDto) {
        const result = await this.createTableUseCase.execute(input);
        return { table: result };
    }

    @Mutation(() => UpdateTableResponse)
    async updateTable(@Args('input') input: UpdateTableDto) {
        await this.updateTableUseCase.execute(input);
        const updated = await this.loadTableByIdUseCase.execute({ _id: input._id });
        return { table: updated };
    }

    @Mutation(() => DeleteTableResponse)
    async deleteTable(@Args('input') input: DeleteTableDto) {
        await this.deleteTableUseCase.execute(input);
        return { table: { _id: input._id } };
    }

    @Mutation(() => RestoreTableResponse)
    async restoreTable(@Args('input') input: RestoreTableDto) {
        await this.restoreTableUseCase.execute(input._id);
        const result = await this.loadTableByIdUseCase.execute({ _id: input._id });
        return { table: result };
    }
}
