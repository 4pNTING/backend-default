"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDbError = handleDbError;
const common_1 = require("@nestjs/common");
function handleDbError(error, uniqueValue) {
    const code = error?.code || error?.driverError?.code;
    const message = error?.message || '';
    if (code === '23505' || message.includes('unique constraint')) {
        throw new common_1.ConflictException(`Currency code "${uniqueValue || ''}" already exists.`);
    }
    if (code === '23502' || message.includes('not-null constraint')) {
        throw new common_1.BadRequestException('Required fields are missing.');
    }
    throw error instanceof Error ? error : new Error(message);
}
//# sourceMappingURL=currency.error.js.map