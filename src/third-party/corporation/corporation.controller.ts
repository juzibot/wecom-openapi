import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from '../../response';
import { UnionIdToExternalUserIdDto } from './unionid-to-external-userid-dto';
import { UnionIdToExternalUserIdResponse } from './unionid-to-external-userid-response';
import { CorpIdToOpenCorpIdDto } from './corpid-to-opencorpid-dto'
import { CorpIdToOpenCorpIdResponse } from './corpid-to-opencorpid-response'

@ApiTags('service')
@Controller('service')
export class CorporationController {
  @Post('corpid_to_opencorpid')
  @ApiOperation({
    operationId: 'corpid_to_opencorpid',
    summary: '代开发应用external_userid转换',
    description: '将明文corpid转换为第三方应用获取的corpid',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95327#14-corpid%E8%BD%AC%E6%8D%A2',
    },
  })
  @ApiBody({ type: CorpIdToOpenCorpIdDto })
  @ApiOkResponse({ type: CorpIdToOpenCorpIdResponse })
  public corpidToOpencorpid() {
    return null;
  }

  @Post('externalcontact/unionid_to_external_userid_3rd')
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
