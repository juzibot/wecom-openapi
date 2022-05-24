import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

export class AllowUserInfos {
  @ApiProperty({
    type: 'string',
    description: '登录用户id',
    required: false,
    example: 'zhangsan',
  })
  userid: string;
}

export class AllowUser {
  @ApiProperty({
    type: AllowUserInfos,
    description: '登录用户id',
    isArray: true,
    example: 'zhangsan',
  })
  user: AllowUserInfos[];
}

export class AllowPartys {
  @ApiProperty({
    type: 'number',
    description: '登录用户id',
    required: false,
    isArray: true,
    example: 'zhangsan',
  })
  partyid: number[];
}

export class AllowTags {
  @ApiProperty({
    type: 'number',
    description: '登录用户id',
    required: false,
    isArray: true,
    example: 'zhangsan',
  })
  partyid: number[];
}

export class GetAgentInfoResponse extends Response {
  @ApiProperty({
    type: 'number',
    description: '应用id',
    required: true,
    example: '1000003',
  })
  agentid: number;

  @ApiProperty({
    type: 'string',
    description: '应用名称',
    required: true,
    example: '1000003',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    description: '企业应用方形头像',
    required: true,
    example: '1000003',
  })
  square_logo_url: string;

  @ApiProperty({
    type: 'string',
    description: '企业应用详情',
    required: true,
    example: '1000003',
  })
  description: string;

  @ApiProperty({
    type: AllowUser,
    description: '企业应用可见范围（人员），其中包括userid',
    example: '1000003',
  })
  allow_userinfos: AllowUser;

  @ApiProperty({
    type: AllowPartys,
    description: '企业应用可见范围（部门）',
    required: true,
    example: '1000003',
  })
  allow_partys: AllowPartys;

  @ApiProperty({
    type: AllowTags,
    description: '企业应用可见范围（标签）',
    required: true,
    example: '1000003',
  })
  allow_tags: AllowTags;

  @ApiProperty({
    type: 'number',
    description: '企业应用是否被停用',
    required: true,
    example: '1000003',
  })
  close: number;

  @ApiProperty({
    type: 'string',
    description: '	企业应用可信域名',
    required: true,
    example: '1000003',
  })
  redirect_domain: string;

  @ApiProperty({
    type: 'number',
    description: '企业应用是否打开地理位置上报 0：不上报；1：进入会话上报',
    required: true,
    example: '1000003',
  })
  report_location_flag: number;

  @ApiProperty({
    type: 'number',
    description: '是否上报用户进入应用事件。0：不接收；1：接收',
    required: true,
    example: '1000003',
  })
  isreportenter: number;

  @ApiProperty({
    type: 'string',
    description: '应用主页url',
    required: true,
    example: '1000003',
  })
  home_url: string;

  @ApiProperty({
    type: 'number',
    description: '应用名称',
    required: true,
    example: '1000003',
  })
  customized_publish_status: number;
}
