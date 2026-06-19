"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFailedFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let QueryFailedFilter = class QueryFailedFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (host.getType() !== 'http') {
            return exception;
        }
        const driverError = exception.driverError || {};
        const errorCode = driverError.code;
        const detail = driverError.detail || '';
        let status = common_1.HttpStatus.BAD_REQUEST;
        let message = exception.message;
        if (errorCode === '23505') {
            status = common_1.HttpStatus.CONFLICT;
            message = 'Duplicate entry error';
            if (detail) {
                const matches = detail.match(/Key \((.*?)\)=\((.*?)\) already exists\./);
                if (matches && matches.length >= 3) {
                    const field = matches[1];
                    const value = matches[2];
                    message = `Value '${value}' for field '${field}' already exists.`;
                }
                else {
                    message = detail;
                }
            }
        }
        else if (errorCode === '23502') {
            status = common_1.HttpStatus.BAD_REQUEST;
            if (driverError.column) {
                message = `Field '${driverError.column}' cannot be null.`;
            }
            else {
                message = exception.message;
            }
        }
        else if (errorCode === '23503') {
            status = common_1.HttpStatus.BAD_REQUEST;
            message = 'Foreign key constraint violation.';
            if (detail) {
                message = detail;
            }
        }
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: message,
            error: status === common_1.HttpStatus.CONFLICT ? 'Conflict' : 'Bad Request',
        });
    }
};
exports.QueryFailedFilter = QueryFailedFilter;
exports.QueryFailedFilter = QueryFailedFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.QueryFailedError)
], QueryFailedFilter);
//# sourceMappingURL=query-failed.filter.js.map