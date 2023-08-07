import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';
import { Banner } from '../banner/entities/banner.entity';
import { Spu } from '../spu/entities/spu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spu, Category, Banner])],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
