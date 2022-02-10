import { ApiProperty } from '@nestjs/swagger';

export class DelTagUsersDto {
  @ApiProperty({
    type: 'number',
    required: true,
    description: '标签ID',
    example: 1,
  })
  tagid: number;

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description:
      '企业成员ID列表，注意：userlist、partylist不能同时为空，单次请求长度不超过1000',
    example: '[ "user1","user2"]',
    maxLength: 1000,
  })
  userlist: string[];

  @ApiProperty({
    type: 'number',
    isArray: true,
    required: false,
    description:
      '企业部门ID列表，注意：userlist、partylist不能同时为空，单次请求长度不超过100',
    example: '[2,4]',
    maxLength: 100,
  })
  partylist: number[];
}
