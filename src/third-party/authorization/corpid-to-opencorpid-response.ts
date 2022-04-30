import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class CorpIdToOpenCorpIdResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: '服务商第三方应用下的企业ID',
    required: true,
    example: 'xxx',
  })
  open_corpid: string;
}
