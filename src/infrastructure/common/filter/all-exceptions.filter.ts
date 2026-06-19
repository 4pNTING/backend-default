import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const resBody = exception.getResponse();
      
      if (typeof resBody === 'string') {
        message = resBody;
      } else if (typeof resBody === 'object' && resBody !== null) {
        const rawMessage = (resBody as any).message || JSON.stringify(resBody);
        message = Array.isArray(rawMessage) ? rawMessage[0] : rawMessage;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      
      // Smart mapping standard Error messages to appropriate HTTP Status codes
      const msgLower = message.toLowerCase();
      if (msgLower.includes('already exists') || msgLower.includes('already taken')) {
        status = HttpStatus.CONFLICT; // 409
      } else if (msgLower.includes('is required') || msgLower.includes('invalid') || msgLower.includes('failed to build') || msgLower.includes('failed to persist')) {
        status = HttpStatus.BAD_REQUEST; // 400
      } else if (msgLower.includes('not found')) {
        status = HttpStatus.NOT_FOUND; // 404
      } else {
        status = HttpStatus.BAD_REQUEST; // Default mapped Error to 400
      }
    } else if (typeof exception === 'string') {
      message = exception;
    }

    response.status(status).json({
      message: message,
    });
  }
}
