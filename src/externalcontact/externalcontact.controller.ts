import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BatchExternalContactDto } from './batch-external-contact-dto';
import { BatchExternalContactResponse } from './batch-external-contact-response';
import { GetExternalContactResponse } from './get-external-contact-response';
import { ListExternalContactResponse } from './list-external-contact-response';

@ApiTags('externalcontact')
@Controller('externalcontact')
export class ExternalcontactController {
  @Get('list')
  @ApiOperation({
    operationId: 'listExternalContact',
    summary: '获取客户列表',
    description:
      '企业可通过此接口获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92113',
    },
  })
  @ApiQuery({ name: 'userid', type: 'string', required: true })
  @ApiOkResponse({ type: ListExternalContactResponse })
  public list() {
    return null;
  }

  @Get('get')
  @ApiOperation({
    operationId: 'getExternalContact',
    summary: '获取客户详情',
    description: '企业可通过此接口，根据外部联系人的userid，拉取客户详情。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92114',
    },
  })
  @ApiQuery({
    name: 'external_userid',
    type: 'string',
    required: true,
    description: '外部联系人的userid，注意不是企业成员的帐号',
  })
  @ApiQuery({
    name: 'cursor',
    required: false,
    type: 'string',
    description: '上次请求返回的next_cursor',
  })
  @ApiOkResponse({ type: GetExternalContactResponse })
  public getExternalContact() {
    return null;
  }

  @Post('batch/get_by_user')
  @ApiOperation({
    operationId: 'batchExternalContact',
    summary: '批量获取客户详情',
    description: '企业/第三方可通过此接口获取指定成员添加的客户信息列表。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92994',
    },
  })
  @ApiBody({ type: BatchExternalContactDto })
  @ApiOkResponse({ type: BatchExternalContactResponse })
  public getExternalContactList() {
    return null;
  }
}
