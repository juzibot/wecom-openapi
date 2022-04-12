import { ApiProperty, PickType } from '@nestjs/swagger';
import { Response } from '../../../response';
import { ContactWay } from './contact-way';

export class ContactWayConfigID extends PickType(ContactWay, ['config_id']) {}

export class ListContactWayResponse extends Response {
  @ApiProperty({
    type: ContactWayConfigID,
    isArray: true,
    required: true,
  })
  contact_way: ContactWayConfigID[];

  @ApiProperty({
    type: 'string',
    required: false,
    description: '分页参数，用于查询下一个分页的数据，为空时表示没有更多的分页',
    example: 'NEXT_CURSOR',
  })
  next_cursor: string;
}
