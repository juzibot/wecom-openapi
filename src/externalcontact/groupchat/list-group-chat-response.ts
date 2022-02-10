import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

class ListGroupChatResponseItem {
  @ApiProperty({
    type: 'string',
    required: false,
    example: 'wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA',
    description: '客户群ID',
  })
  chat_id: string;

  @ApiProperty({
    type: 'number',
    required: false,
    example: 0,
    description: `
      客户群跟进状态。
      0 - 跟进人正常
      1 - 跟进人离职
      2 - 离职继承中
      3 - 离职继承完成`,
  })
  status: number;
}

export class ListGroupChatResponse extends Response {
  @ApiProperty({
    type: ListGroupChatResponseItem,
    isArray: true,
    required: false,
    description: '客户群列表',
  })
  group_chat_list: ListGroupChatResponseItem;

  @ApiProperty({
    type: 'string',
    required: false,
    example: 'tJzlB9tdqfh-g7i_J-ehOz_TWcd7dSKa39_AqCIeMFw',
    description:
      '分页游标，下次请求时填写以获取之后分页的记录。如果该字段返回空则表示已没有更多数据',
  })
  next_cursor: string;
}
