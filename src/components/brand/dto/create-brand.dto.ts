import { IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: '品牌名不能为空' })
  title: string;

  logo: string;
}
