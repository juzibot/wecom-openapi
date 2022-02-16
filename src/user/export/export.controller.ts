import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ExportDepartmentDto } from './export-department-dto';
import { ExportTagUsersDto } from './export-tag-users-dto';
import { ExportUserDto } from './export-user-dto';
import { ExportUserResponse } from './export-user-response';
import { ExportUserResultResponse } from './export-user-result-response';

@ApiTags('user')
@Controller('export')
export class ExportController {
  @Post('simple_user')
  @ApiOperation({
    operationId: 'exportSimpleUser',
    summary: '导出成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/94849',
    },
  })
  @ApiBody({ type: ExportUserDto })
  @ApiOkResponse({ type: ExportUserResponse })
  public simple_user() {
    return null;
  }

  @Post('user')
  @ApiOperation({
    operationId: 'exportUser',
    summary: '导出成员详情',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/94851',
    },
  })
  @ApiBody({ type: ExportUserDto })
  @ApiOkResponse({ type: ExportUserResponse })
  public user() {
    return null;
  }

  @Post('department')
  @ApiOperation({
    operationId: 'exportDepartment',
    summary: '导出部门',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/94852',
    },
  })
  @ApiBody({ type: ExportDepartmentDto })
  @ApiOkResponse({ type: ExportUserResponse })
  public department() {
    return null;
  }

  @Post('taguser')
  @ApiOperation({
    operationId: 'exportTagUser',
    summary: '导出标签成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/94853',
    },
  })
  @ApiBody({ type: ExportTagUsersDto })
  @ApiOkResponse({ type: ExportUserResponse })
  public taguser() {
    return null;
  }

  @Get('get_result')
  @ApiOperation({
    operationId: 'getExportUserResult',
    summary: '获取导出结果',
    description: '获取任务结果的调用身份需要与提交任务的一致',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/94854',
    },
  })
  @ApiQuery({
    name: 'jobid',
    type: 'string',
    required: true,
    description: '导出任务接口成功后返回',
  })
  @ApiOkResponse({ type: ExportUserResultResponse })
  public get_result() {
    return null;
  }
}
