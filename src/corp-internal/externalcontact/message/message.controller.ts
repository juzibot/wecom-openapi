import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from '../../../response';
import { AddMsgTemplateDto } from './add_msg_template-dto';
import { AddMsgTemplateResponse } from './add_msg_template-response';
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

  @Post('add_msg_template')
  @ApiOperation({
    operationId: 'addMsgTemplateExternalContact',
    summary: '创建企业群发',
    description:
      '企业跟第三方应用可通过此接口添加企业群发消息的任务并通知成员发送给相关客户或客户群。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92135',
    },
  })
  @ApiBody({ type: AddMsgTemplateDto })
  @ApiOkResponse({ type: AddMsgTemplateResponse })
  public addMsgTemplate() {
    return null;
  }
}
