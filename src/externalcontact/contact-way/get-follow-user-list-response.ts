import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetFollowUserListResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: true,
    isArray: true,
    description: '配置了客户联系功能的成员userid列表',
    example: ['zhangsan', 'lissi'],
  })
  follow_user: string[];
}
