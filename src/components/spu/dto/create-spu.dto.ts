import { IsNotEmpty } from 'class-validator';

export class CreateSpuDto {
  @IsNotEmpty({ message: '产品名称不能为空' })
  name: string;

  @IsNotEmpty({ message: '产品描述不能为空' })
  desc: string;

  category: string;

  channel: number;

  brandId: string;
}
