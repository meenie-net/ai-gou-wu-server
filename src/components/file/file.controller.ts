import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
  @Post('imgUpload')
  @UseInterceptors(FileInterceptor('img'))
  imgUpload(@UploadedFile() file: Express.Multer.File) {
    const imgPath = `/${Date.now()}.${file.fieldname}`;
    const writeStream = createWriteStream(
      join(__dirname, '../../../static/img', imgPath),
    );
    try {
      writeStream.write(file.buffer);
    } catch (error) {
      throw new HttpException(
        { message: '', error: '' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return imgPath;
  }
}
