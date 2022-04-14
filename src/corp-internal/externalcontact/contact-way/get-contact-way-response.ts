import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Response } from '../../../response';
import { ContactWay, ContactWayConclusions } from './contact-way';

export class ContactWayConclusionsImageResponse {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'pic_url',
    example: 'http://p.qpic.cn/pic_wework/XXXXX',
  })
  pic_url: string;
}

export class ContactWayConclusionsResponse extends OmitType(
  ContactWayConclusions,
  ['image'],
) {
  @ApiProperty({
    type: ContactWayConclusionsImageResponse,
    required: false,
    description: '图片链接',
    example: 'http://xxx.com/xxx.png',
  })
  image: ContactWayConclusionsImageResponse;
}

export class ContactWayResponse extends OmitType(ContactWay, ['conclusions']) {
  @ApiProperty({
    type: ContactWayConclusionsResponse,
    required: false,
    description: '结束语，会话结束时自动发送给客户',
    example: '',
  })
  conclusions: ContactWayConclusionsResponse;
}

export class GetContactWayResponse extends Response {
  @ApiProperty({
    type: ContactWayResponse,
  })
  contact_way: ContactWayResponse;
}
