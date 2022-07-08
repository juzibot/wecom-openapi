import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SendMessageDto } from './send-message-dto';
import { Response } from '../../response';

@ApiTags('message')
@Controller('message')
export class MessageController {
  @Post('/send')
  @ApiOperation({
    operationId: 'message-send',
    summary: '发送应用消息',
    description:
      '互联企业是企业微信提供的满足集团与子公司、企业与上下游供应商进行连接的功能，企业可以共享通讯录以及应用给互联企业，如需要，你可以前往管理后台-通讯录创建互联企业，之后你可以在自建应用的可见范围设置互联企业的通讯录；此接口主要满足开发者给互联企业成员推送消息的诉求。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90250#%E6%96%87%E6%9C%AC%E6%B6%88%E6%81%AF',
    },
  })
  @ApiBody({ type: SendMessageDto })
  @ApiOkResponse({
    type: Response,
  })
  public send() {
    return null;
  }
}
