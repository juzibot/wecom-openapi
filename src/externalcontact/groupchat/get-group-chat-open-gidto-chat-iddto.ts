import { ApiProperty } from '@nestjs/swagger';

export class GetGroupChatOpenGidtoChatIddto {
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'oAAAAAAA',
    description: '小程序在微信获取到的群ID',
  })
  opengid: string;
}
