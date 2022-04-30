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
import { UnionIdToExternalUserIdDto } from './unionid-to-external-userid-dto';
import { UnionIdToExternalUserIdResponse } from './unionid-to-external-userid-response';

@ApiTags('externalcontact')
@Controller('')
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
  

  @Post('service/externalcontact/unionid_to_external_userid_3rd')
  @ApiOperation({
    operationId: 'unionid_to_external_userid_3rd',
    summary: '代开发应用external_userid转换',
    description: '当微信用户在微信中使用第三方应用的小程序或公众号时，第三方可将获取到的unionid与openid，调用此接口转换为企业客户或学生家长的external_userid',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95327#%E5%9B%9B%E3%80%81%E4%BC%81%E4%B8%9A%E5%AE%A2%E6%88%B7%E5%BE%AE%E4%BF%A1unionid%E7%9A%84%E5%8D%87%E7%BA%A7%E6%96%B9%E6%A1%88',
    },
  })
  @ApiBody({ type: UnionIdToExternalUserIdDto })
  @ApiOkResponse({ type: UnionIdToExternalUserIdResponse })
  public unionidToExternalUserId3rd() {
    return null;
  }
}
