import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class OpenUserInfo {
  @ApiProperty({
    type: 'string',
    description: '转换成功的userid',
    required: true,
    example: 'xxx',
  })
  userid: string;
  @ApiProperty({
    type: 'string',
    description: '转换成功的userid对应的该服务商应用下的成员ID',
    required: true,
    example: 'xxx',
  })
  open_userid: string;
}

export class UserIdToOpenUserIdResponse extends Response {
  @ApiProperty({
    type: OpenUserInfo,
    description: '该服务商第三方应用下的成员ID',
    isArray: true,
    required: true,
    example: 'xxx',
  })
  open_userid_list: OpenUserInfo[];

  @ApiProperty({
    type: 'string',
    description: '未转换成功的userid',
    isArray: true,
    required: true,
    example: 'xxx',
  })
  invalid_userid_list: string[];
}
