import { Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AccessTokenResponse } from './access-token-response';
import { GetCorpTokenDto } from './get-corp-token-dto';
import { GetProviderTokenDto } from './get-provider-token-dto';
import { GetProviderTokenResponse } from './get-provider-token-response';
import { GetSuiteTokenDto } from './get-suite-token-dto';
import { GetSuiteTokenResponse } from './get-suite-token-response';

@ApiTags('access_token')
@Controller('service')
export class ThirdPartyController {
  @Post('/get_corp_token')
  @ApiOperation({
    operationId: 'GetCorpToken',
    summary: '获取企业凭证',
    description:
      '第三方服务商在取得企业的永久授权码后，通过此接口可以获取到企业的access_token。获取后可通过通讯录、应用、消息等企业接口来运营这些应用。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90605',
    },
  })
  @ApiQuery({
    name: 'suite_access_token',
    type: 'string',
    required: true,
    description: '',
    example: 'SUITE_ACCESS_TOKEN',
  })
  @ApiBody({ type: GetCorpTokenDto })
  @ApiOkResponse({ type: AccessTokenResponse })
  public get_corp_token() {
    return null;
  }

  @Post('/get_suite_token')
  @ApiOperation({
    operationId: 'GetSuiteToken',
    summary: '获取第三方应用凭证',
    description: '',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90600',
    },
  })
  @ApiBody({ type: GetSuiteTokenDto })
  @ApiOkResponse({ type: GetSuiteTokenResponse })
  public get_suite_token() {
    return null;
  }

  @Post('/get_provider_token')
  @ApiOperation({
    operationId: 'GetProviderToken',
    summary: '获取服务商凭证',
    description: '',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/91200',
    },
  })
  @ApiBody({ type: GetProviderTokenDto })
  @ApiOkResponse({ type: GetProviderTokenResponse })
  public get_provider_token() {
    return null;
  }
}
