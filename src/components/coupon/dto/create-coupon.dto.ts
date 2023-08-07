import { IsNotEmpty } from 'class-validator';

export class CreateCouponDto {
  @IsNotEmpty({ message: '账户ID不能为空' })
  customerId: string; // 账户ID

  @IsNotEmpty({ message: '标题不能为空' })
  title: string; // 标题

  @IsNotEmpty({ message: '类型ID不能为空' })
  typeId: string; // 类型ID

  usedAmount: number; // 已使用
}
