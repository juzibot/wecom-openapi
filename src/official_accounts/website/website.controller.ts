import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Oauth2Response } from './oauth2-response';
import { UserinfoResponse } from './userinfo-response';

// https://api.weixin.qq.com
@ApiTags('official_account')
@Controller('/sns')
export class WebsiteController {
  @Get('/oauth2/access_token')
  @ApiOperation({
    operationId: 'oauth2_access_token',
    summary: '通过 code 换取网页授权access_token',
    externalDocs: {
      url: 'https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#1',
    },
  })
  @ApiQuery({ name: 'appid', type: 'string', required: true })
  @ApiQuery({ name: 'secret', type: 'string', required: true })
  @ApiQuery({ name: 'code', type: 'string', required: true })
  @ApiQuery({ name: 'grant_type', type: 'string', required: true })
  @ApiOkResponse({ type: Oauth2Response })
  public oauth2() {
    return null;
  }

  @Get('/userinfo')
  @ApiOperation({
    operationId: 'sns_userinfo',
    summary:
      '如果网页授权作用域为snsapi_userinfo，则此时开发者可以通过access_token和 openid 拉取用户信息了。',
    externalDocs: {
      url: 'https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#3',
    },
  })
  @ApiQuery({
    name: 'access_token',
    type: 'string',
    required: true,
    description:
      '网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同',
  })
  @ApiQuery({ name: 'openid', type: 'string', required: true })
  @ApiQuery({ name: 'lang', type: 'string', required: false })
  @ApiOkResponse({ type: UserinfoResponse })
  public userinfo() {
    return null;
  }
}
