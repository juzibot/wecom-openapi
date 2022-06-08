import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
import { GetUserResponse } from './get-user-response';

export class ListUsersResponse extends Response {
  @ApiProperty({
    type: GetUserResponse,
    isArray: true,
    required: false,
    description: '成员列表',
  })
  userlist: GetUserResponse[];
}
