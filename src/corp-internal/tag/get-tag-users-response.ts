import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

class TagUser {
  @ApiProperty({ type: 'string', example: 'zhangsan', description: '成员帐号' })
  userid: string;

  @ApiProperty({ type: 'string', example: '张三' })
  name: string;
}

export class GetTagUsersResponse extends Response {
  @ApiProperty({ type: String, description: '标签名', example: '乒乓球协会' })
  tagname: string;

  @ApiProperty({
    type: TagUser,
    isArray: true,
    description: '标签中包含的成员列表',
  })
  userlist: TagUser[];

  @ApiProperty({
    type: 'number',
    isArray: true,
    example: '[1, 2]',
    description: '标签中包含的部门id列表',
  })
  partylist: number[];
}
