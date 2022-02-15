import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';
import { ExternalContact, ExternalFollowUser } from './external-contact';

export class BatchExternalContactResponseItemFollowInfo extends ExternalFollowUser {}

export class BatchExternalContactResponseItem {
  @ApiProperty({
    type: ExternalContact,
    required: false,
    description: '客户的基本信息',
  })
  external_contact: ExternalContact;

  @ApiProperty({
    type: ExternalFollowUser,
    required: false,
    description:
      '企业成员客户跟进信息，可以参考获取客户详情，但标签信息只会返回企业标签和规则组标签的tag_id，个人标签将不再返回',
  })
  follow_info: ExternalFollowUser;
}

export class BatchExternalContactResponse extends Response {
  @ApiProperty({ type: BatchExternalContactResponseItem, isArray: true })
  external_contact_list: BatchExternalContactResponseItem[];

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空',
  })
  next_cursor: string;
}
