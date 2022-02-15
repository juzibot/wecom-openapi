import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from '../response';
import { BatchDeleteUserDto } from './batch-delete-user-dto';
import { CreateUserDto } from './create-user-dto';
import { GetUserResponse } from './get-user-response';
import { ListUsersResponse } from './list-users-response';
import { SimpleListUserResponse } from './simple-list-user-response';
import { UpdateUserDto } from './update-user-dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  @Post('create')
  @ApiOperation({
    operationId: 'createUser',
    summary: '创建成员',
    description: '创建成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90195',
    },
  })
  @ApiBody({ type: CreateUserDto })
  @ApiOkResponse({ type: Response })
  public create() {
    return null;
  }

  @Get('get')
  @ApiOperation({
    operationId: 'getUser',
    summary: '获取成员',
    description: '获取成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90196',
    },
  })
  @ApiQuery({
    name: 'userid',
    type: 'string',
    required: true,
    description:
      '成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节',
  })
  @ApiOkResponse({ type: GetUserResponse })
  public get() {
    return null;
  }

  @Post('update')
  @ApiOperation({
    operationId: 'updateUser',
    summary: '更新成员',
    description: '更新成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90197',
    },
  })
  @ApiBody({ type: UpdateUserDto })
  public update() {
    return null;
  }

  @Get('delete')
  @ApiOperation({
    operationId: 'deleteUser',
    summary: '删除成员',
    description: '删除成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90198',
    },
  })
  @ApiQuery({
    name: 'userid',
    type: 'string',
    required: true,
    description: '成员UserID。对应管理端的帐号',
  })
  @ApiOkResponse({ type: Response })
  public delete() {
    return null;
  }

  @Post('batchdelete')
  @ApiOperation({
    operationId: 'batchDeleteUser',
    summary: '批量删除成员',
    description: '批量删除成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90199',
    },
  })
  @ApiBody({ type: BatchDeleteUserDto })
  @ApiOkResponse({ type: Response })
  public batchDelete() {
    return null;
  }

  @Get('simplelist')
  @ApiOperation({
    operationId: 'simpleListUser',
    summary: '获取部门成员',
    description: '获取部门成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90200',
    },
  })
  @ApiQuery({
    name: 'department_id',
    required: true,
    type: 'number',
    description: '获取的部门id',
  })
  @ApiQuery({
    name: 'fetch_child',
    required: false,
    enum: [0, 1],
    type: 'number',
    description: '是否递归获取子部门下面的成员：1-递归获取，0-只获取本部门',
  })
  @ApiOkResponse({ type: SimpleListUserResponse })
  public simplelist() {
    return null;
  }

  @Get('list')
  @ApiOperation({
    operationId: 'listUsers',
    summary: '获取部门成员详情',
    description: '获取部门成员详情',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90201',
    },
  })
  @ApiQuery({
    name: 'department_id',
    required: true,
    type: 'number',
    description: '获取的部门id',
  })
  @ApiQuery({
    name: 'fetch_child',
    required: false,
    enum: [0, 1],
    type: 'number',
    description: '是否递归获取子部门下面的成员：1-递归获取，0-只获取本部门',
  })
  @ApiOkResponse({ type: ListUsersResponse })
  public list() {
    return null;
  }
}
