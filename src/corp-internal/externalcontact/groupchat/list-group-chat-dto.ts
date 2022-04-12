import { ApiProperty } from '@nestjs/swagger';

class GroupChatOwnerFilter {
  @ApiProperty({
    required: false,
    type: 'string',
    isArray: true,
    maxItems: 100,
    example: '["abel"]',
    description: '用户ID列表。最多100个',
  })
  userid_list: string[];
}

export class ListGroupChatDto {
  @ApiProperty({
    enum: [0, 1, 2, 3],
    required: false,
    type: 'number',
    description: `
    客户群跟进状态过滤。
    0 - 所有列表(即不过滤)
    1 - 离职待继承
    2 - 离职继承中
    3 - 离职继承完成

    默认为0`,
    default: 0,
  })
  status_filter: number;

  @ApiProperty({ required: false, type: GroupChatOwnerFilter })
  owner_filter: GroupChatOwnerFilter;

  @ApiProperty({
    required: false,
    type: 'string',
    description:
      '用于分页查询的游标，字符串类型，由上一次调用返回，首次调用不填',
    example: 'r9FqSqsI8fgNbHLHE5QoCP50UIg2cFQbfma3l2QsmwI',
  })
  cursor: string;

  @ApiProperty({
    required: true,
    type: 'number',
    description: '分页，预期请求的数据量，取值范围 1 ~ 1000',
    example: '10',
    minimum: 1,
    maximum: 1000,
  })
  limit: number;
}
