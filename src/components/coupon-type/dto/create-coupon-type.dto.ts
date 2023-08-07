import { IsNotEmpty } from 'class-validator';

export class CreateCouponTypeDto {
  @IsNotEmpty({ message: '账户ID不能为空' })
  title: string; // 标题

  @IsNotEmpty({ message: '价值不能为空' })
  value: number; // 价值

  stock: number; // 库存
}
