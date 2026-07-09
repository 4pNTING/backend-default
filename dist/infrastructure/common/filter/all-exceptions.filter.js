"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        if (host.getType().toString() === 'graphql') {
            const gqlHost = graphql_1.GqlArgumentsHost.create(host);
            let message = 'Internal server error';
            if (exception instanceof common_1.HttpException) {
                const resBody = exception.getResponse();
                if (typeof resBody === 'string')
                    message = resBody;
                else if (typeof resBody === 'object' && resBody !== null) {
                    const rawMessage = resBody.message || JSON.stringify(resBody);
                    message = Array.isArray(rawMessage) ? rawMessage[0] : rawMessage;
                }
            }
            else if (exception instanceof Error) {
                message = exception.message;
            }
            else if (typeof exception === 'string') {
                message = exception;
            }
            return new Error(message);
        }
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const resBody = exception.getResponse();
            if (typeof resBody === 'string') {
                message = resBody;
            }
            else if (typeof resBody === 'object' && resBody !== null) {
                const rawMessage = resBody.message || JSON.stringify(resBody);
                message = Array.isArray(rawMessage) ? rawMessage[0] : rawMessage;
            }
        }
        else if (exception instanceof Error) {
            message = exception.message;
            const msgLower = message.toLowerCase();
            if (msgLower.includes('already exists')) {
                status = common_1.HttpStatus.CONFLICT;
            }
            else if (msgLower.includes('is required') || msgLower.includes('invalid') || msgLower.includes('failed to build') || msgLower.includes('failed to persist')) {
                status = common_1.HttpStatus.BAD_REQUEST;
            }
            else if (msgLower.includes('not found')) {
                status = common_1.HttpStatus.NOT_FOUND;
            }
            else {
                status = common_1.HttpStatus.BAD_REQUEST;
            }
        }
        else if (typeof exception === 'string') {
            message = exception;
        }
        response.status(status).json({
            message: message,
        });
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exceptions.filter.js.map