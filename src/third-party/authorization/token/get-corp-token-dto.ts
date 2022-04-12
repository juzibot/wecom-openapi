import { ApiProperty } from '@nestjs/swagger';

export class GetCorpTokenDto {
  @ApiProperty({
    type: 'string',
    description: '授权方corpid',
    required: true,
    example: 'auth_corpid_value',
  })
  auth_corpid: string;

  @ApiProperty({
    type: 'string',
    description: '永久授权码，通过get_permanent_code获取',
    required: true,
    example: 'code_value',
  })
  permanent_code: string;
}
