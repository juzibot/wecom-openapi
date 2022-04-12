import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../../response';

class GroupChatAdmin {
  @ApiProperty({
    required: false,
    type: 'string',
    example: 'sam',
  })
  userid: string;
}

class GroupChatMemberInvitor {
  @ApiProperty({
    required: false,
    type: 'string',
    example: 'jack',
  })
  userid: string;
}

class GroupChatMember {
  @ApiProperty({
    required: false,
    type: 'string',
    example: 'abel',
  })
  userid: string;

  @ApiProperty({
    enum: [1, 2],
    required: false,
    type: 'number',
    example: 1,
    description: `成员类型: 1 - 企业成员, 2 - 外部联系人`,
  })
  type: number;

  @ApiProperty({
    required: false,
    type: 'number',
    example: 1572505491,
  })
  join_time: number;

  @ApiProperty({
    required: false,
    type: 'number',
    example: 1,
  })
  join_scene: number;

  @ApiProperty({
    required: false,
    type: GroupChatMemberInvitor,
  })
  invitor: GroupChatMemberInvitor;

  @ApiProperty({
    required: false,
    type: 'string',
    example: '客服小张',
  })
  group_nickname: string;

  @ApiProperty({
    required: false,
    type: 'string',
    example: '张三丰',
  })
  name: string;

  @ApiProperty({
    name: 'unionid',
    required: false,
    type: 'string',
    example: 'ozynqsulJFCZ2z1aYeS8h-nuasdAAA',
  })
  union_id: string;
}

class GroupChat {
  @ApiProperty({
    required: false,
    type: 'string',
    example: 'wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA',
  })
  chat_id: string;

  @ApiProperty({ required: false, type: 'string', example: '销售客服群' })
  name: string;

  @ApiProperty({ required: false, type: 'string', example: 'ZhuShengBen' })
  owner: string;

  @ApiProperty({ required: false, type: 'number', example: 1572505490 })
  create_time: number;

  @ApiProperty({
    required: false,
    type: 'string',
    example: '文明沟通，拒绝脏话',
  })
  notice: string;

  @ApiProperty({
    required: false,
    type: GroupChatMember,
    isArray: true,
  })
  member_list: GroupChatMember[];

  @ApiProperty({
    required: false,
    type: GroupChatAdmin,
    isArray: true,
  })
  admin_list: GroupChatAdmin[];
}

export class GetGroupChatResponse extends Response {
  @ApiProperty({ type: GroupChat, required: false })
  group_chat: GroupChat;
}
