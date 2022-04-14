import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../../response';

export class AddContactWayResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '新增联系方式的配置id',
    example: '42b34949e138eb6e027c123cba77fAAA',
  })
  config_id: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '联系我二维码链接，仅在scene为2时返回',
    example: 'http://p.qpic.cn/wwhead/duc2TvpEgSdicZ9RrdUtBkv2UiaA/0',
  })
  qr_code: string;
}
