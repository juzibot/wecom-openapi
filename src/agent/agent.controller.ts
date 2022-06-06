import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { GetAgentInfoResponse } from './agent-get-response';

@ApiTags('agent')
@Controller('agent')
export class AgentController {
  @Get('/get')
  @ApiOperation({
    operationId: 'get_agent_info',
    summary: '获取预授权码',
    description:
      '该API用于获取预授权码。预授权码用于企业授权时的第三方服务商安全验证。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90601',
    },
  })
  @ApiQuery({ name: 'agentid', type: 'string', required: true })
  @ApiOkResponse({ type: GetAgentInfoResponse })
  public get_pre_auth_code() {
    return null;
  }
}
