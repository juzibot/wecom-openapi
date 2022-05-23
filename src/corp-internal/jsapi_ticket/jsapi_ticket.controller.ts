import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GetJsapiTicketResponse } from './get_jsapi_ticket_response';
import { TicketGetResponse } from './ticket_get_response';

@ApiTags('jsapi_ticket')
@Controller('')
export class JsapiTicketController {
  @Get('/get_jsapi_ticket')
  @ApiOperation({
    operationId: 'get_jsapi_ticket',
    description: '获取企业的jsapi_ticket',
    summary: '获取企业的jsapi_ticket',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90506#%E8%8E%B7%E5%8F%96%E4%BC%81%E4%B8%9A%E7%9A%84jsapi-ticket',
    },
  })
  @ApiOkResponse({ type: GetJsapiTicketResponse })
  public get_jsapi_ticket() {
    return null;
  }

  @Get('/ticket/get')
  @ApiOperation({
    operationId: 'ticket_get',
    description: '获取应用的jsapi_ticket',
    summary: '获取应用的jsapi_ticket',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90506#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E7%9A%84jsapi-ticket',
    },
  })
  @ApiQuery({
    type: 'string',
    name: 'type',
    required: true,
    enum: ['agent_config'],
  })
  @ApiOkResponse({ type: TicketGetResponse })
  public ticket_get() {
    return null;
  }
}
