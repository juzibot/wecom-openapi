import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { Response } from '../../response';
import { User } from './user';

export class GetUserResponseDetail extends User {
  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '	头像url。 第三方仅通讯录应用可获取；对于非第三方创建的成员，第三方通讯录应用也不可获取；上游企业不可获取下游企业成员该字段',
    example:
      'http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0',
  })
  avatar: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '	头像缩略图url。第三方仅通讯录应用可获取；对于非第三方创建的成员，第三方通讯录应用也不可获取；上游企业不可获取下游企业成员该字段',
    example:
      'http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/100',
  })
  thumb_avatar: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '员工个人二维码，扫描可添加为外部联系人(注意返回的是一个url，可在浏览器上打开该url以展示二维码)；第三方仅通讯录应用可获取；对于非第三方创建的成员，第三方通讯录应用也不可获取；上游企业不可获取下游企业成员该字段',
    example: 'https://open.work.weixin.qq.com/wwopen/userQRCode?vcode=xxx',
  })
  qr_code: string;

  @ApiProperty({
    enum: [1, 2, 4, 5],
    type: 'number',
    required: false,
    description: `激活状态: 1=已激活，2=已禁用，4=未激活，5=退出企业。
    已激活代表已激活企业微信或已关注微信插件（原企业号）。未激活代表既未激活企业微信又未关注微信插件（原企业号）。`,
    example: 1,
  })
  status: number;
}

export class GetUserResponse extends IntersectionType(User, Response) {}
