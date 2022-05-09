import { ApiProperty } from '@nestjs/swagger';

export class UserIdToOpenUserIdDto {
  @ApiProperty({
    type: 'string',
    isArray: true,
    description: 'userids',
    required: true,
    example: '["xxx", "yyy"]',
  })
  userid_list: string[];
}
