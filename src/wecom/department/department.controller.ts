import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from '../response';
import { CreateDepartmentResponse } from './create-department-response';
import { GetDepartmentResponse } from './get-department-response';
import { ListDepartmentResponse } from './list-department-response';
import { SimpleListDepartmentResponse } from './simple-list-department-response';
import { UpdateDepartmentDto } from './update-department-dto';

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  @Post('create')
  @ApiOperation({
    operationId: 'create',
    summary: '创建部门',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90205',
    },
  })
  @ApiOkResponse({ type: CreateDepartmentResponse })
  public create() {
    return null;
  }

  @Post('update')
  @ApiOperation({
    operationId: 'update',
    summary: '更新部门',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90206',
    },
  })
  @ApiBody({ type: UpdateDepartmentDto })
  @ApiOkResponse({ type: Response })
  public update() {
    return null;
  }

  @Get('delete')
  @ApiOperation({
    operationId: 'delete',
    summary: '删除部门',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90207',
    },
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
    required: true,
    description:
      '部门id。（注：不能删除根部门；不能删除含有子部门、成员的部门）',
  })
  @ApiOkResponse({ type: Response })
  public delete() {
    return null;
  }

  @Get('list')
  @ApiOperation({
    operationId: 'list',
    summary: '获取部门列表',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90208',
    },
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
    required: true,
    description:
      '部门id。获取指定部门及其下的子部门（以及子部门的子部门等等，递归）。 如果不填，默认获取全量组织架构',
  })
  @ApiOkResponse({ type: ListDepartmentResponse })
  public list() {
    return null;
  }

  @Get('simplelist')
  @ApiOperation({
    operationId: 'simplelist',
    summary: '获取子部门ID列表',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95350',
    },
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
    description:
      '部门id。获取指定部门及其下的子部门（以及子部门的子部门等等，递归）。 如果不填，默认获取全量组织架构',
  })
  @ApiOkResponse({ type: SimpleListDepartmentResponse })
  public simplelist() {
    return null;
  }

  @Get('get')
  @ApiOperation({
    operationId: 'get',
    summary: '获取单个部门详情',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95351',
    },
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
    required: true,
    description: '部门id',
  })
  @ApiOkResponse({ type: GetDepartmentResponse })
  public get() {
    return null;
  }
}
