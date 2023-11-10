import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: '名称不能为空' })
  name: string; // 名称

  state: number; // 状态

  logo: string; // 图标

  parentId: string; // 父分类Id
}
