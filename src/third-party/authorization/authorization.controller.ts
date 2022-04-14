import { Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GetPermanentCodeDto } from './get-permanent-code-dto';
import { GetPermanentCodeResponse } from './get-permanent-code-response';
import { GetPreAuthCodeResponse } from './get-pre-auth-code-response';

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
}
