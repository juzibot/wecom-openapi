import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class UserInfo {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '登录用户id',
    example: '',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '',
    example: '',
  })
  open_userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '登录用户的名称',
    example: '',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '登录用户的头像',
    example: '',
  })
  avatar: string;
}

export class CorpInfo {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '企业corpid',
    example: '',
  })
  corpid: string;
}

export class Agent {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '应用id',
    example: '',
  })
  agentid: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '该管理云对应用的权限：1. 管理权限，0.使用权限',
    example: '',
  })
  auth_type: number;
}

export class Department {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '部门id',
    example: '',
  })
  id: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '',
    example: '',
  })
  writable: boolean;
}

export class AuthInfo {
  @ApiProperty({
    type: Department,
    required: false,
    description: '',
  })
  department: Department[];
}

export class GetLoginInfoResponse extends Response {
  @ApiProperty({
    type: 'number',
    required: false,
    description:
      '登录用户的类型：1.创建者 2.内部系统管理员 3.外部系统管理员 4.分级管理员 5.成员',
    example: '1',
  })
  usertype: 1;

  @ApiProperty({
    type: UserInfo,
    required: false,
    description: '登录用户信息',
  })
  user_info: UserInfo;

  @ApiProperty({
    type: CorpInfo,
    required: false,
    description: '授权方企业id',
  })
  corp_info: CorpInfo;

  // @ApiProperty({
  //   type: Agent,
  //   required: false,
  //   description:
  //     '该管理员在该提供商中能使用的应用列表，当登录用户为管理员时返回',
  // })
  // agent: Agent[];

  // @ApiProperty({
  //   type: AuthInfo,
  //   required: false,
  //   description: '',
  // })
  // auth_info: AuthInfo;
}
