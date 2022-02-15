import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GetJoinQrcodeResponse } from './get-join-qrcode-response';

@ApiTags('user')
@Controller('corp')
export class CorpController {
  @Get('get_join_qrcode')
  @ApiOperation({
    operationId: 'getJoinQRcode',
    summary: '获取加入企业二维码',
    description: '支持企业用户获取实时成员加入二维码。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/91714',
    },
  })
  @ApiQuery({
    name: 'size_type',
    required: false,
    type: 'number',
    enum: [1, 2, 3, 4],
    description:
      'qrcode尺寸类型; 1: 171 x 171; 2: 399 x 399; 3: 741 x 741; 4: 2052 x 2052',
  })
  @ApiOkResponse({ type: GetJoinQrcodeResponse })
  public get_join_qrcode() {
    return null;
  }
}
