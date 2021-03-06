import { ApiProperty, PickType } from '@nestjs/swagger';
import { Response } from '../../response';
import { User } from './user';

export class SimpleListUserResponseUser extends PickType(User, [
  'userid',
  'name',
  'department',
  'open_userid',
] as const) {}

export class SimpleListUserResponse extends Response {
  @ApiProperty({
    type: SimpleListUserResponseUser,
    isArray: true,
    required: false,
    description: 'ๆๅๅ่กจ',
  })
  userlist: Pick<User, 'userid' | 'name' | 'department' | 'open_userid'>[];
}
