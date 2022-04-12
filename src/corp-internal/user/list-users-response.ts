import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
import { GetUserResponseDetail } from './get-user-response';

export class ListUsersResponse extends Response {
  @ApiProperty({
    type: GetUserResponseDetail,
    isArray: true,
    required: false,
    description: '成员列表',
  })
  userlist: GetUserResponseDetail[];
}
