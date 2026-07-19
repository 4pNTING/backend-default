import { CreateTableDto, UpdateTableDto, LoadTableDto, LoadTableByIdDto, DeleteTableDto, RestoreTableDto } from './table.model';
import { CreateTableUseCase } from '../../../usecases/table/createTable.usecase';
import { UpdateTableUseCase } from '../../../usecases/table/updateTable.usecase';
import { DeleteTableUseCase } from '../../../usecases/table/deleteTable.usecase';
import { RestoreTableUseCase } from '../../../usecases/table/restoreTable.usecase';
import { LoadTableUseCase } from '../../../usecases/table/loadTable.usecase';
import { LoadByIDTableUseCase } from '../../../usecases/table/loadByIDTable.usecase';
export declare class TableResolver {
    private readonly createTableUseCase;
    private readonly updateTableUseCase;
    private readonly deleteTableUseCase;
    private readonly restoreTableUseCase;
    private readonly loadTableUseCase;
    private readonly loadTableByIdUseCase;
    constructor(createTableUseCase: CreateTableUseCase, updateTableUseCase: UpdateTableUseCase, deleteTableUseCase: DeleteTableUseCase, restoreTableUseCase: RestoreTableUseCase, loadTableUseCase: LoadTableUseCase, loadTableByIdUseCase: LoadByIDTableUseCase);
    loadTable(input: LoadTableDto): Promise<{
        table: import("../../../domain/models/table.model").TableModel[];
        count: number;
    }>;
    loadTableById(input: LoadTableByIdDto): Promise<{
        table: import("../../../domain/models/table.model").LoadTableByIdResponse;
    }>;
    createTable(input: CreateTableDto): Promise<{
        table: import("../../../domain/models/table.model").CreateTableResponse;
    }>;
    updateTable(input: UpdateTableDto): Promise<{
        table: import("../../../domain/models/table.model").LoadTableByIdResponse;
    }>;
    deleteTable(input: DeleteTableDto): Promise<{
        table: {
            _id: string;
        };
    }>;
    restoreTable(input: RestoreTableDto): Promise<{
        table: import("../../../domain/models/table.model").LoadTableByIdResponse;
    }>;
}
