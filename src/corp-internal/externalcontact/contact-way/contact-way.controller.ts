import { Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from '../../../response';
import { AddContactWayDto } from './add-contact-way-dto';
import { AddContactWayResponse } from './add-contact-way-response';
import { CloseTempChatDto } from './close-temp-chat-dto';
import { DeleteContactWayDto } from './delete-contact-way-dto';
import { GetContactWayDto } from './get-contact-way-dto';
import { GetContactWayResponse } from './get-contact-way-response';
import { GetFollowUserListResponse } from './get-follow-user-list-response';
import { ListContactWayDto } from './list-contact-way-dto';
import { ListContactWayResponse } from './list-contact-way-response';
import { UpdateContactWayDto } from './update-contact-way-dto';

@ApiTags('externalcontact')
@Controller('externalcontact')
export class ContactWayController {
  @Post('/add_contact_way')
  @ApiOperation({
    operationId: 'addContactWay',
    summary: '通过API添加「联系我」',
    description: '通过API添加的「联系我」',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92572',
    },
  })
  @ApiBody({ type: AddContactWayDto, required: true })
  @ApiOkResponse({ type: AddContactWayResponse })
  public add_contact_way() {
    return null;
  }

  @Post('/get_contact_way')
  @ApiOperation({
    operationId: 'getContactWay',
    summary: '获取企业已配置的「联系我」方式',
    description: '获取企业配置的「联系我」二维码和「联系我」小程序按钮。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92572',
    },
  })
  @ApiBody({ type: GetContactWayDto, required: true })
  @ApiOkResponse({ type: GetContactWayResponse })
  public get_contact_way() {
    return null;
  }

  @Post('/list_contact_way')
  @ApiOperation({
    operationId: 'listContactWay',
    summary: '获取企业已配置的「联系我」列表',
    description:
      '获取企业配置的「联系我」二维码和「联系我」小程序插件列表。不包含临时会话。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92572',
    },
  })
  @ApiBody({ type: ListContactWayDto, required: true })
  @ApiOkResponse({ type: ListContactWayResponse })
  public list_contact_way() {
    return null;
  }

  @Post('/update_contact_way')
  @ApiOperation({
    operationId: 'updateContactWay',
    summary: '更新企业已配置的「联系我」方式',
    description:
      '更新企业配置的「联系我」二维码和「联系我」小程序按钮中的信息，如使用人员和备注等。',
  })
  @ApiBody({ type: UpdateContactWayDto })
  @ApiOkResponse({ type: Response })
  public update_contact_way() {
    return null;
  }

  @Post('/del_contact_way')
  @ApiOperation({
    operationId: 'deleteContactWay',
    summary: '删除企业已配置的「联系我」方式',
    description: '删除一个已配置的「联系我」二维码或者「联系我」小程序按钮。',
  })
  @ApiBody({ type: DeleteContactWayDto, required: true })
  @ApiOkResponse({ type: Response })
  public del_contact_way() {
    return null;
  }

  @Post('/close_temp_chat')
  @ApiOperation({
    operationId: 'closeTempChat',
    summary: '关闭临时会话',
    description:
      '将指定的企业成员和客户之前的临时会话断开，断开前会自动下发已配置的结束语。',
  })
  @ApiBody({ type: CloseTempChatDto, required: true })
  @ApiOkResponse({ type: Response })
  public close_temp_chat() {
    return null;
  }

  @Get('/get_follow_user_list')
  @ApiOperation({
    operationId: 'getFollowUserList',
    summary: '获取配置了客户联系功能的成员列表',
    description:
      '企业和第三方服务商可通过此接口获取配置了客户联系功能的成员列表。',
  })
  @ApiOkResponse({ type: GetFollowUserListResponse })
  public get_follow_user_list() {
    return null;
  }
}
