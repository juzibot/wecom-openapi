import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class UploadImgResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '图片URL',
    example:
      'http://p.qpic.cn/pic_wework/3474110808/7a7c8471673ff0f178f63447935d35a5c1247a7f31d9c060/0',
  })
  url: string;
}
