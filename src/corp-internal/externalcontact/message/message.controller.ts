import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from '../../../response';
import {
  AddMsgTemplateDto,
  getGroupMsgSendResultDto,
} from './add_msg_template-dto';
import {
  AddMsgTemplateResponse,
  getGroupMsgSendResultResponse,
} from './add_msg_template-response';
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

  @Post('get_groupmsg_send_result')
  @ApiOperation({
    operationId: 'getGroupMsgSendResult',
    summary: '获取企业群发成员执行结果',
    description: '获取企业群发成员执行结果',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/93338#%E8%8E%B7%E5%8F%96%E4%BC%81%E4%B8%9A%E7%BE%A4%E5%8F%91%E6%88%90%E5%91%98%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C',
    },
  })
  @ApiBody({ type: getGroupMsgSendResultDto })
  @ApiOkResponse({ type: getGroupMsgSendResultResponse })
  public getGroupMsgSendResult() {
    return null;
  }
}
