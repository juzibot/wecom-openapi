import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../../response';

export class GetGroupChatOpenGidtoChatIdresponse extends Response {
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'ooAAAAAAAAAAA',
    description: '客户群ID',
  })
  chat_id: string;
}
