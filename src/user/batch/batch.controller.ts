import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BatchDeleteUserDto } from '../batch-delete-user-dto';
import { BatchUserResponse } from './batch-user-response';
import { BatchUserResultResponse } from './batch-user-result-response';

@ApiTags('user')
@Controller('batch')
export class BatchController {
  @Post('syncuser')
  @ApiOperation({
    operationId: 'syncUser',
    summary: '增量更新成员',
    description:
      '本接口以userid（帐号）为主键，增量更新企业微信通讯录成员。请先下载CSV模板(下载增量更新成员模版)，根据需求填写文件内容。    ',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90980',
    },
  })
  @ApiBody({ type: BatchDeleteUserDto })
  @ApiOkResponse({ type: BatchUserResponse })
  public syncuser() {
    return null;
  }

  @Post('replaceuser')
  @ApiOperation({
    operationId: 'replaceUser',
    summary: '全量覆盖成员',
    description:
      '本接口以userid为主键，全量覆盖企业的通讯录成员，任务完成后企业的通讯录成员与提交的文件完全保持一致。请先下载CSV文件(下载全量覆盖成员模版)，根据需求填写文件内容。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90981',
    },
  })
  @ApiBody({ type: BatchDeleteUserDto })
  @ApiOkResponse({ type: BatchUserResponse })
  public replaceuser() {
    return null;
  }

  @Post('replaceparty')
  @ApiOperation({
    operationId: 'replaceParty',
    summary: '全量覆盖部门',
    description:
      '本接口以partyid为键，全量覆盖企业的通讯录组织架构，任务完成后企业的通讯录组织架构与提交的文件完全保持一致。请先下载CSV文件(下载全量覆盖部门模版)，根据需求填写文件内容。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90982',
    },
  })
  @ApiBody({ type: BatchDeleteUserDto })
  @ApiOkResponse({ type: BatchUserResponse })
  public replaceparty() {
    return null;
  }

  @Get('getresult')
  @ApiOperation({
    operationId: 'getBatchUserResult',
    summary: '获取批量任务结果',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90983',
    },
  })
  @ApiQuery({ name: 'jobid', type: 'string', required: true })
  @ApiOkResponse({ type: BatchUserResultResponse })
  public getresult() {
    return null;
  }
}
