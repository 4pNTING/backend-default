import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql'; // 1. เพิ่มตัวนี้เข้ามา

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    // === ตรวจสอบว่าเป็น GraphQL หรือไม่ ===
    if (host.getType().toString() === 'graphql') {
      const gqlHost = GqlArgumentsHost.create(host);
      
      // แกะข้อความ Error ออกมาทำความสะอาด
      let message = 'Internal server error';
      if (exception instanceof HttpException) {
        const resBody = exception.getResponse();
        if (typeof resBody === 'string') message = resBody;
        else if (typeof resBody === 'object' && resBody !== null) {
          const rawMessage = (resBody as any).message || JSON.stringify(resBody);
          message = Array.isArray(rawMessage) ? rawMessage[0] : rawMessage;
        }
      } else if (exception instanceof Error) {
        message = exception.message;
      } else if (typeof exception === 'string') {
        message = exception;
      }

      // ส่ง Error กลับไปในรูปแบบที่ GraphQL เข้าใจ (ห้ามใช้ response.status)
      return new Error(message); 
    }

    // === โค้ดเดิมสำหรับ REST API (เก็บไว้เหมือนเดิมได้เลย) ===
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

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
      const msgLower = message.toLowerCase();
      if (msgLower.includes('already exists')) {
        status = HttpStatus.CONFLICT;
      } else if (msgLower.includes('is required') || msgLower.includes('invalid') || msgLower.includes('failed to build') || msgLower.includes('failed to persist')) {
        status = HttpStatus.BAD_REQUEST;
      } else if (msgLower.includes('not found')) {
        status = HttpStatus.NOT_FOUND;
      } else {
        status = HttpStatus.BAD_REQUEST;
      }
    } else if (typeof exception === 'string') {
      message = exception;
    }

    response.status(status).json({
      message: message,
    });
  }
}