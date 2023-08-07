import { IsNotEmpty, Matches } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty({ message: '账户ID不能为空' })
  customerId: string; // 买家Id

  @IsNotEmpty({ message: '联系人姓名不能为空' })
  name: string; // 买家姓名

  @IsNotEmpty({ message: '电话号码不能为空' })
  @Matches(
    /(^(0\d{2,3}\-)?([2-9]\d{6,7})+(\-\d{1,6})?$)|(^((\+86|\+86\-)|(86|86\-)|(0086|0086\-))?1[3|5|7|8]\d{9}$)/g,
    {
      message: '请输入正确的联系方式',
    },
  )
  tel: string; // 买家电话

  @IsNotEmpty({ message: '联系地址不能为空' })
  @Matches(
    /^([^市县区]+(?:省|自治区|特别行政区))([^市县区]+市|市辖区)([^市县区]+(?:区|县|市内区|林区|特区))?((?:[^\\n]*))$/,
    { message: '请输入正确的联系地址' },
  )
  location: string; // 位置
}
