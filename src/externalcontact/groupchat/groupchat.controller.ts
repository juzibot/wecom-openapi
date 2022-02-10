import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('groupchat')
@Controller('groupchat')
export class GroupchatController {
  @Post('list')
  @ApiOperation({
    operationId: 'groupChatList',
    summary: '获取客户群列表',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92120',
    },
  })
  public list() {
    return null;
  }
}
