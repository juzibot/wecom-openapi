import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
export class CorpIdToOpenCorpIdDto extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    isArray: false,
    description:
      '该服务商第三方应用下的企业ID',
  })
  open_corpid: string;
}
