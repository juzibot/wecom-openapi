import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AccessTokenResponse } from './access-token-response';

@ApiTags('access_token')
@Controller('')
export class AccessTokenController {
  @Get('gettoken')
  @ApiOperation({
    operationId: 'GetToken',
    summary: '获取access_token',
    description:
      '获取access_token是调用企业微信API接口的第一步，相当于创建了一个登录凭证，其它的业务API接口，都需要依赖于access_token来鉴权调用者身份。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/91039',
    },
  })
  @ApiQuery({
    name: 'corpid',
    type: 'string',
    description: '企业ID',
    required: true,
  })
  @ApiQuery({
    name: 'corpsecret',
    type: 'string',
    description: '应用的凭证密钥',
    required: true,
  })
  @ApiOkResponse({ type: AccessTokenResponse })
  public gettoken() {
    return null;
  }
}
