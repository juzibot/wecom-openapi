import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from '../../../response';
import { SendWelcomeMsgDto } from './send-welcom-msg-dto';

@ApiTags('externalcontact')
@Controller('externalcontact')
export class MessageController {
  @Post('send_welcome_msg')
  @ApiOperation({
    operationId: 'send_welcome_msg',
    summary: '发送新客户欢迎语',
    description: '',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92137',
    },
  })
  @ApiBody({ type: SendWelcomeMsgDto })
  @ApiOkResponse({ type: Response })
  public send_welcome_msg() {
    return null;
  }
}
