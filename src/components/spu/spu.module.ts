import { Module } from '@nestjs/common';
import { SpuService } from './spu.service';
import { SpuController } from './spu.controller';
import { Spu } from './entities/spu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Spu])],
  controllers: [SpuController],
  providers: [SpuService],
})
export class SpuModule {}
