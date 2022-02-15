import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

export class InviteUserResponse extends Response {
  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '非法成员列表',
    example: ['UserID1', 'UserID2'],
  })
  invaliduser: string[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '非法部门列表',
    example: ['PartyID1', 'PartyID2'],
  })
  invalidparty: string[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '非法标签列表',
    example: ['TagID1', 'TagID2'],
  })
  invalidtag: string[];
}
