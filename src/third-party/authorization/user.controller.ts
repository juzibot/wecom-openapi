import { Controller, Post, Get } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { UserIdToOpenUserIdDto } from './userid-to-openid.dto';
import { UserIdToOpenUserIdResponse } from './userid-to-openuserid.response';

@ApiTags('third-user')
@Controller('batch')
export class UserController {
  @Post('/userid_to_openuserid')
  @ApiOperation({
    operationId: 'userid_to_openuserid',
    summary: '获取微信开放平的userid',
    description: '第三方应用获取微信开放平台的userid。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95603',
    },
  })
  @ApiQuery({ name: 'provider_access_token', type: 'string', required: true })
  @ApiBody({ type: UserIdToOpenUserIdDto, required: true })
  @ApiOkResponse({ type: UserIdToOpenUserIdResponse })
  public userid_to_openuserid() {
    return null;
  }
}
