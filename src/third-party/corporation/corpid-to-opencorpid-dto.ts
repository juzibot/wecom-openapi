import { ApiProperty } from '@nestjs/swagger';

export class CorpIdToOpenCorpIdDto {
  @ApiProperty({
    type: 'string',
    isArray: false,
    required: true,
    maxLength: 100,
    description: '待获取的企业ID',
  })
  corpid: string;
}
