import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetPreAuthCodeResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: '预授权码,最长为512字节',
    required: false,
    example: 'Cx_Dk6qiBE0Dmx4EmlT3oRfArPvwSQ-oa3NL_fwHM7VI08r52wazoZX2Rhpz1dEw',
  })
  pre_auth_code: string;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    description: '预授权码',
    required: false,
    example: '有效期（秒）',
  })
  expires_in: number;
}
