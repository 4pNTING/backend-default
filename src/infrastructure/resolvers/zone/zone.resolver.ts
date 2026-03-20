import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ZoneUsecasesProxyModule } from '../../usecases-proxy/zone-usecases-proxy.module';
import { CreateZoneUsecase } from '../../../usecases/zone/createZone.usecase';
import { UpdateZoneUsecase } from '../../../usecases/zone/updateZone.usecase';
import { DeleteZoneUsecase } from '../../../usecases/zone/deleteZone.usecase';
import { LoadAllZoneUsecase } from '../../../usecases/zone/loadAllZone.usecase';
import { LoadZoneByIdUsecase } from '../../../usecases/zone/loadZoneById.usecase';
import { RestoreZoneUsecase } from '../../../usecases/zone/restoreZone.usecase';

import {
    Zone,
    CreateZoneDto,
    UpdateZoneDto,
    DeleteZoneDto,
    LoadZoneDto,
    LoadZoneByIdDto,
    RestoreZoneDto,
    LoadZoneResponse,
    CreateZoneResponse,
    UpdateZoneResponse,
    DeleteZoneResponse,
    RestoreZoneResponse,
    LoadZoneByIdResponse,
    ActiveStatus
} from './zone.model';

@Resolver(() => Zone)
export class ZoneResolver {
    constructor(
        @Inject(ZoneUsecasesProxyModule.CREATE_ZONE_PROXY)
        private readonly createZoneUsecase: CreateZoneUsecase,
        @Inject(ZoneUsecasesProxyModule.UPDATE_ZONE_PROXY)
        private readonly updateZoneUsecase: UpdateZoneUsecase,
        @Inject(ZoneUsecasesProxyModule.DELETE_ZONE_PROXY)
        private readonly deleteZoneUsecase: DeleteZoneUsecase,
        @Inject(ZoneUsecasesProxyModule.LOAD_ALL_ZONE_PROXY)
        private readonly loadAllZoneUsecase: LoadAllZoneUsecase,
        @Inject(ZoneUsecasesProxyModule.LOAD_BY_ID_ZONE_PROXY)
        private readonly loadZoneByIdUsecase: LoadZoneByIdUsecase,
        @Inject(ZoneUsecasesProxyModule.RESTORE_ZONE_PROXY)
        private readonly restoreZoneUsecase: RestoreZoneUsecase,
    ) { }

    @Query(() => LoadZoneResponse, { name: 'loadZone' })
    async loadZone(
        @Args('input') input: LoadZoneDto,
    ) {
        // Map simple input directly to QueryProps
        const query: any = {};

        if (input) {
            // 1. Pagination
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page,
                    limit: input.limit
                };
            }

            // 2. Search (Keyword)
            if (input.keyword) {
                query.search = {
                    q: input.keyword
                };
            }

            if (input.isActive) {
                query.isActive = input.isActive;
            }
        }

        const result = await this.loadAllZoneUsecase.execute(query);
        return {
            count: result.total,
            zone: result.items,
        };
    }

    @Query(() => LoadZoneByIdResponse, { name: 'loadZoneById' })
    async loadZoneById(
        @Args('input') input: LoadZoneByIdDto,
    ) {
        const result = await this.loadZoneByIdUsecase.execute({ _id: input._id });
        if (!result) return { zone: null };
        return { zone: result };
    }

    @Mutation(() => CreateZoneResponse)
    async createZone(
        @Args('input') input: CreateZoneDto,
    ) {
        console.log('--- RESOLVER createZone input ---', JSON.stringify(input));
        const result = await this.createZoneUsecase.execute(input);
        return { zone: result };
    }

    @Mutation(() => UpdateZoneResponse)
    async updateZone(
        @Args('input') input: UpdateZoneDto,
    ) {
        console.log('--- MEGA UPDATE ZONE DEBUG ---', JSON.stringify(input));
        // execute returns void
        await this.updateZoneUsecase.execute(input);

        // Fetch updated
        const updated = await this.loadZoneByIdUsecase.execute({ _id: input._id });
        return { zone: updated };
    }

    @Mutation(() => DeleteZoneResponse)
    async deleteZone(
        @Args('input') input: DeleteZoneDto,
    ) {
        await this.deleteZoneUsecase.execute({ _id: input._id });
        return { zone: { _id: input._id } }; // Return partial for ID confirmation
    }

    @Mutation(() => RestoreZoneResponse)
    async restoreZone(
        @Args('input') input: RestoreZoneDto,
    ) {
        await this.restoreZoneUsecase.execute(input._id);
        const restored = await this.loadZoneByIdUsecase.execute({ _id: input._id });
        return { zone: restored };
    }
}
