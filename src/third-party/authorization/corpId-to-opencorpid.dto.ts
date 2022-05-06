import { ApiProperty } from '@nestjs/swagger';

export class CorpIdToOpenCorpIdDto {
  @ApiProperty({
    type: 'string',
    description: '企业corpid',
    required: true,
    example: 'xxx',
  })
  corpid: string;
}
