import { ApiProperty } from '@nestjs/swagger';

export class GetPermanentCodeDto {
  @ApiProperty({
    type: 'string',
    description: '临时授权码',
    required: true,
    example: 'auth_code_value',
  })
  auth_code: string;
}
