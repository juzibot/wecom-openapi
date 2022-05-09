import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AuthenticationResponse } from './authentication-response';

@ApiTags('authentication')
@Controller('user')
export class AuthenticationController {
  @Get('getuserinfo')
  @ApiOperation({
    operationId: 'getuserinfo',
    summary: '获取访问用户身份',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/91023',
    },
  })
  @ApiQuery({
    name: 'code',
    required: true,
    type: 'string',
    description: '通过成员授权获取到的code',
  })
  @ApiOkResponse({ type: AuthenticationResponse })
  public getuserinfo() {
    return null;
  }
}
