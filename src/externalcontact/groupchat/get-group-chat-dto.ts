import { ApiProperty } from '@nestjs/swagger';

export class GetGroupChatDto {
  @ApiProperty({
    type: 'string',
    required: true,
    example: 'wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA',
    description: '客户群ID',
  })
  chat_id: string;

  @ApiProperty({
    enum: [0, 1],
    required: false,
    default: 0,
    example: 1,
    description:
      '是否需要返回群成员的名字group_chat.member_list.name。0-不返回；1-返回。默认不返回',
  })
  need_name: number;
}
