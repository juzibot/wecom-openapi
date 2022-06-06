import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class UserinfoResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: '用户的唯一标识',
    required: false,
    example: 'OPENID',
  })
  openid: string;

  @ApiProperty({
    type: 'string',
    description: '用户昵称',
    required: false,
    example: 'NICKNAME',
  })
  nickname: string;

  @ApiProperty({
    type: 'number',
    enum: [0, 1, 2],
    description: '用户的性别，值为1时是男性，值为2时是女性，值为0时是未知',
    required: false,
    example: 1,
  })
  sex: 1;

  @ApiProperty({
    type: 'string',
    description: '用户个人资料填写的省份',
    required: false,
    example: 'PROVINCE',
  })
  province: string;

  @ApiProperty({
    type: 'string',
    description: '普通用户个人资料填写的城市',
    required: false,
    example: 'CITY',
  })
  city: string;

  @ApiProperty({
    type: 'string',
    description: '国家，如中国为CN',
    required: false,
    example: 'COUNTRY',
  })
  country: string;

  @ApiProperty({
    type: 'string',
    description:
      '用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。',
    required: false,
    example:
      'https://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46',
  })
  headimgurl: string;

  @ApiProperty({
    type: 'string',
    isArray: true,
    description: '用户特权信息，json 数组，如微信沃卡用户为（chinaunicom）',
    required: false,
    example: ['PRIVILEGE1', 'PRIVILEGE2'],
  })
  privilege: string[];

  @ApiProperty({
    type: 'string',
    description: '只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。',
    required: false,
    example: 'o6_bmasdasdsad6_2sgVt7hMZOPfL',
  })
  unionid: string;
}
