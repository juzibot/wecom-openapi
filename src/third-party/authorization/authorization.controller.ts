import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CorpIdToOpenCorpIdResponse } from './corpid-to-opencorpid-response';
import { CorpIdToOpenCorpIdDto } from './corpId-to-opencorpid.dto';
import { GetLoginInfoResponse } from './get-login-info-response';
import { GetLoginInfoDto } from './get-login-info.dto';
import { GetPermanentCodeDto } from './get-permanent-code-dto';
import { GetPermanentCodeResponse } from './get-permanent-code-response';
import { GetPreAuthCodeResponse } from './get-pre-auth-code-response';
import { GetCustomizedAuthUrlBody } from './customized-auth-url.dto';
import { GetCustomizedAuthUrlResponse } from './customized-auth-url-response';
import { GetUserInfo3rdResponse } from './get-user-info-3rd-response';

@ApiTags('third-party')
@Controller('service')
export class AuthorizationController {
  @Post('/get_pre_auth_code')
  @ApiOperation({
    operationId: 'get_pre_auth_code',
    summary: '获取预授权码',
    description:
      '该API用于获取预授权码。预授权码用于企业授权时的第三方服务商安全验证。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90601',
    },
  })
  @ApiQuery({ name: 'suite_access_token', type: 'string', required: true })
  @ApiOkResponse({ type: GetPreAuthCodeResponse })
  public get_pre_auth_code() {
    return null;
  }

  @Post('/get_permanent_code')
  @ApiOperation({
    operationId: 'get_permanent_code',
    summary: '获取企业永久授权码',
    description:
      '该API用于使用临时授权码换取授权方的永久授权码，并换取授权信息、企业access_token，临时授权码一次有效。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90603',
    },
  })
  @ApiBody({ type: GetPermanentCodeDto, required: true })
  @ApiOkResponse({ type: GetPermanentCodeResponse })
  public get_permanent_code() {
    return null;
  }

  @Post('/get_login_info')
  @ApiOperation({
    operationId: 'get_login_info',
    summary: '获取企业登录信息',
    description: '第三方应用，获取扫码登录用户信息。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/91125',
    },
  })
  @ApiBody({ type: GetLoginInfoDto, required: true })
  @ApiOkResponse({ type: GetLoginInfoResponse })
  public get_login_info() {
    return null;
  }

  @Post('/corpid_to_opencorpid')
  @ApiOperation({
    operationId: 'corpid_to_opencorpid',
    summary: '获取企业微信开放平台的corpid',
    description: '第三方应用，获取企业微信开放平台的corpid。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95604',
    },
  })
  @ApiQuery({ name: 'provider_access_token', type: 'string', required: true })
  @ApiBody({ type: CorpIdToOpenCorpIdDto, required: true })
  @ApiOkResponse({ type: CorpIdToOpenCorpIdResponse })
  public corpid_to_opencorpid() {
    return null;
  }

  @Post('/get_customized_auth_url')
  @ApiOperation({
    operationId: 'get_customized_auth_url',
    summary: '获取带参授权链接',
    description: '获取代开发应用带参授权链接',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95436',
    },
  })
  @ApiQuery({ name: 'provider_access_token', type: 'string', required: true })
  @ApiBody({ type: GetCustomizedAuthUrlBody, required: true })
  @ApiOkResponse({ type: GetCustomizedAuthUrlResponse })
  public get_customized_auth_url() {
    return null;
  }

  @Get('/getuserinfo3rd')
  @ApiOperation({
    operationId: 'getuserinfo3rd',
    summary: '获取访问用户身份',
    description: '第三方应用，获取访问用户身份。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/91121',
    },
  })
  @ApiQuery({
    name: 'code',
    required: true,
    type: 'string',
    description: '通过成员授权获取到的code',
  })
  @ApiOkResponse({ type: GetUserInfo3rdResponse })
  public getuserinfo3rd() {
    return null;
  }
}
