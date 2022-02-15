import { ApiProperty } from '@nestjs/swagger';

export class ConvertToOpenIdDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '企业内的成员id',
    example: 'zhangsan',
  })
  userid: string;
}
