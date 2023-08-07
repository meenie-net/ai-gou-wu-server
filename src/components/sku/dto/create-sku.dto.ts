import { IsNotEmpty } from 'class-validator';

export class CreateSkuDto {
  @IsNotEmpty({ message: '标题不能为空' })
  title: string; // 标题

  @IsNotEmpty({ message: '值不能为空' })
  value: string; // 值

  stock: number; // 库存

  @IsNotEmpty({ message: '价格不能为空' })
  price: number; // 价格

  img: string; // 图片

  discount: number; // 折扣

  desc: string; // 描述

  selling: number; // 销量

  salesVolume: number; // 近30天已售
}
