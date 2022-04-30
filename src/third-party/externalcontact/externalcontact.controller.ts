import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from '../../response';
import { ExchangeExternalUserIdDto } from './exchange-external-userid-dto';
import { ExchangeExternalUserIdResponse } from './exchange-external-userid-response';

@ApiTags('externalcontact')
@Controller('externalcontact')
export class ExternalcontactController {
  @Post('externalcontact/to_service_external_userid')
  @ApiOperation({
    operationId: 'to_service_external_userid',
    summary: '代开发应用external_userid转换',
    description:
      '企业同时安装服务商第三方应用以及授权代开发自建应用的时，服务商可使用该接口将代开发应用获取到的外部联系人id跟第三方应用的id进行关联，该接口可将代开发自建应用获取到的external_userid转换为服务商第三方应用的external_userid。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95195',
    },
  })
  @ApiBody({ type: ExchangeExternalUserIdDto })
  @ApiOkResponse({ type: ExchangeExternalUserIdResponse })
  public toServiceExternalUserid() {
    return null;
  }
}
