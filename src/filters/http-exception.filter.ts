import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HTTP_STATUS_CODE } from 'src/config/config';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const exceptionRes: any = exception.getResponse();
    Logger.log('错误提示', JSON.stringify(exception));
    switch (exception) {
    }
    const errorResponse = {
      data:
        exceptionRes.message instanceof Array
          ? exceptionRes.message[0]
          : exceptionRes.message, // 获取全部的错误信息
      msg: exceptionRes.error,
      status: HTTP_STATUS_CODE.HTTP_ERROR, // 自定义code
      url: request.originalUrl, // 错误的url地址
    };
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // 设置返回的状态码、请求头、发送错误信息
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
