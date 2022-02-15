import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetJoinQrcodeResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '二维码链接，有效期7天',
    example:
      'https://work.weixin.qq.com/wework_admin/genqrcode?action=join&vcode=3db1fab03118ae2aa1544cb9abe84&r=hb_share_api_mjoin&qr_size=3',
  })
  join_qrcode: string;
}
