import { QueryProps } from '../models/query.model';
import {
    CreateTableRequest,
    CreateTableResponse,
    UpdateTableRequest,
    DeleteTableRequest,
    LoadAllTableResponse,
    LoadTableByIdRequest,
    LoadTableByIdResponse,
    LoadTableByZoneRequest,
    LoadTableByZoneResponse,
} from '../models/table.model';

export interface ITableRepository {
    create(params: CreateTableRequest): Promise<CreateTableResponse>;
    update(params: UpdateTableRequest): Promise<void>;
    delete(params: DeleteTableRequest): Promise<void>;
    restore(_id: string): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllTableResponse>;
    findById(params: LoadTableByIdRequest): Promise<LoadTableByIdResponse | null>;
    findByZone(params: LoadTableByZoneRequest): Promise<LoadTableByZoneResponse>;
    findByNumber(number: string): Promise<LoadTableByIdResponse | null>;
}
