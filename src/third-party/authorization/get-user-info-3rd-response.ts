import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetUserInfo3rdResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: '用户所属企业的corpid',
    required: false,
    example: 'CORPID',
  })
  CorpId: string;

  @ApiProperty({
    type: 'string',
    description:
      '用户在企业内的UserID，如果该企业与第三方应用没有授权关系时，返回密文UserId，有授权关系时，按照升级后的ID策略返回明文或密文',
    required: false,
    example: 'USERID',
  })
  UserId: string;

  @ApiProperty({
    type: 'string',
    description:
      '手机设备号(由企业微信在安装时随机生成，删除重装会改变，升级不受影响)',
    required: false,
    example: 'DEVICEID',
  })
  DeviceId: string;

  @ApiProperty({
    type: 'string',
    description: '成员票据，最大为512字节',
    required: false,
    example: 'USER_TICKET',
  })
  user_ticket: string;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    description: 'user_ticket的有效时间（秒），随user_ticket一起返回',
    required: false,
    example: '7200',
  })
  expires_in: number;

  @ApiProperty({
    type: 'string',
    description:
      '全局唯一。对于同一个服务商，不同应用获取到企业内同一个成员的open_userid是相同的，最多64个字节',
    required: false,
    example: 'wwxxxx',
  })
  open_userid: string;
}
