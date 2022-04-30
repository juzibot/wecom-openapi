import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from '../../response';
import { BatchDeleteUserDto } from './batch-delete-user-dto';
import { ConvertToOpenIdDto } from './convert-to-open-id-dto';
import { ConvertToOpenIdResponse } from './convert-to-open-id-response';
import { CreateUserDto } from './create-user-dto';
import { GetActiveStatDto } from './get-active-stat-dto';
import { GetActiveStatResponse } from './get-active-stat-response';
import { GetUserIdDto } from './get-user-id-dto';
import { GetUserIdResponse } from './get-user-id-response';
import { GetUserInfoResponse } from './get-user-info-response';
import { GetUserResponse } from './get-user-response';
import { InviteUserDto } from './invite-user-dto';
import { InviteUserResponse } from './invite-user-response';
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

  @Post('invite')
  @ApiOperation({
    operationId: 'inviteUser',
    summary: '邀请成员',
    description:
      '企业可通过接口批量邀请成员使用企业微信，邀请后将通过短信或邮件下发通知。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90975',
    },
  })
  @ApiBody({ type: InviteUserDto })
  @ApiOkResponse({ type: InviteUserResponse })
  public invite() {
    return null;
  }

  @Post('get_active_stat')
  @ApiOperation({
    operationId: 'getActiveStat',
    summary: '获取企业活跃成员数',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92714',
    },
  })
  @ApiBody({ type: GetActiveStatDto })
  @ApiOkResponse({ type: GetActiveStatResponse })
  public get_active_stat() {
    return null;
  }

  @Post('getuserid')
  @ApiOperation({
    operationId: 'getUserId',
    summary: '手机号获取userid',
    description: '通过手机号获取其所对应的userid',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/95402',
    },
  })
  @ApiBody({ type: GetUserIdDto })
  @ApiOkResponse({ type: GetUserIdResponse })
  public getuserid() {
    return null;
  }

  @Post('convert_to_openid')
  @ApiOperation({
    operationId: 'convertToOpenId',
    summary: 'userid转openid',
    description:
      '该接口使用场景为企业支付，在使用企业红包和向员工付款时，需要自行将企业微信的userid转成openid。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90202',
    },
  })
  @ApiBody({ type: ConvertToOpenIdDto })
  @ApiOkResponse({ type: ConvertToOpenIdResponse })
  public convert_to_openid() {
    return null;
  }

  @Get('/getuserinfo')
  @ApiOperation({
    operationId: 'getuserinfo',
    summary: '获取访问用户身份',
    description: '获取扫码登录的用户身份',
    externalDocs: {
      url: 'hhttps://developer.work.weixin.qq.com/document/path/91437',
    },
  })
  @ApiQuery({ name: 'code', type: 'string' })
  @ApiOkResponse({ type: GetUserInfoResponse })
  public getuserinfo() {
    return null;
  }
}
