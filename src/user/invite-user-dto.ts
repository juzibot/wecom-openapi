import { ApiProperty } from '@nestjs/swagger';

export class InviteUserDto {
  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    maxLength: 100,
    description: '成员列表',
    example: ['UserID1', 'UserID2'],
  })
  user: string[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    maxLength: 100,
    description: '部门列表',
    example: ['PartyID1', 'PartyID2'],
  })
  party: string[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    maxLength: 100,
    description: '标签列表',
    example: ['TagID1', 'TagID2'],
  })
  tag: string[];
}
