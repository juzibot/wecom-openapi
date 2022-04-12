import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetGroupChatDto } from './get-group-chat-dto';
import { GetGroupChatOpenGidtoChatIdDto } from './get-group-chat-open-gidto-chat-iddto';
import { GetGroupChatOpenGidtoChatIdresponse } from './get-group-chat-open-gidto-chat-idresponse';
import { GetGroupChatResponse } from './get-group-chat-response';
import { ListGroupChatDto } from './list-group-chat-dto';
import { ListGroupChatResponse } from './list-group-chat-response';

@ApiTags('externalcontact')
@Controller('externalcontact/groupchat')
export class GroupchatController {
  @Post('list')
  @ApiOperation({
    operationId: 'listGroupChat',
    summary: '获取客户群列表',
    description: '该接口用于获取配置过客户群管理的客户群列表。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92120',
    },
  })
  @ApiBody({ type: ListGroupChatDto })
  @ApiOkResponse({ type: ListGroupChatResponse })
  public list() {
    return null;
  }

  @Post('get')
  @ApiOperation({
    operationId: 'getGroupChat',
    summary: '获取客户群详情',
    description:
      '通过客户群ID，获取详情。包括群名、群成员列表、群成员入群时间、入群方式。（客户群是由具有客户群使用权限的成员创建的外部群）',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92122',
    },
  })
  @ApiBody({ type: GetGroupChatDto })
  @ApiOkResponse({ type: GetGroupChatResponse })
  public get() {
    return null;
  }

  @Post('opengid_to_chatid')
  @ApiOperation({
    operationId: 'groupChatOpenGIDToChatID',
    summary: '客户群opengid转换',
    description:
      '用户在微信里的客户群里打开小程序时，某些场景下可以获取到群的opengid，如果该群是企业微信的客户群，则企业或第三方可以调用此接口将一个opengid转换为客户群chat_id',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92122',
    },
  })
  @ApiBody({ type: GetGroupChatOpenGidtoChatIdDto })
  @ApiOkResponse({ type: GetGroupChatOpenGidtoChatIdresponse })
  public openGIDToChatID() {
    return null;
  }
}
