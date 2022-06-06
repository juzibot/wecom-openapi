import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class DealerCorpInfo {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '',
    example: '',
  })
  corpid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '',
    example: '',
  })
  corp_name: string;
}
export class AuthCorpInfo {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权方企业微信id',
    example: 'xxxx',
  })
  corpid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权方企业名称，即企业简称',
    example: 'name',
  })
  corp_name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    enum: ['verified', 'unverified'],
    description: '授权方企业类型，认证号：verified, 注册号：unverified',
    example: 'verified',
  })
  corp_type: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权方企业方形头像',
    example: 'yyyyy',
  })
  corp_square_logo_url: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '授权方企业用户规模',
    example: 50,
  })
  corp_user_max: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '授权方企业的主体名称(仅认证或验证过的企业有)，即企业全称。企业微信将逐步回收该字段',
    example: 'full_name',
  })
  corp_full_name: string;

  @ApiProperty({
    type: 'number',
    description: '认证到期时间',
    example: 1431775834,
  })
  verified_end_time: number;

  @ApiProperty({
    type: 'number',
    enum: [1, 2, 3, 4],
    required: false,
    description:
      '企业类型，1. 企业; 2. 政府以及事业单位; 3. 其他组织, 4.团队号',
    example: 1,
  })
  subject_type: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权企业在微信插件（原企业号）的二维码，可用于关注微信插件',
    example: 'zzzzz',
  })
  corp_wxqrcode: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '企业规模。当企业未设置该属性时，值为空',
    example: '1-50人',
  })
  corp_scale: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '	企业所属行业。当企业未设置该属性时，值为空',
    example: 'IT服务',
  })
  corp_industry: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '企业所属子行业。当企业未设置该属性时，值为空',
    example: '计算机软件/硬件/信息服务',
  })
  corp_sub_industry: string;
}

export class AuthInfoAgentPrivilege {
  @ApiProperty({
    type: 'number',
    required: false,
    description: `权限等级。
    1:通讯录基本信息只读
    2:通讯录全部信息只读
    3:通讯录全部信息读写
    4:单个基本信息只读
    5:通讯录全部信息只写`,
    enum: [1, 2, 3, 4, 5],
    example: 1,
  })
  level: number;

  @ApiProperty({
    type: 'number',
    isArray: true,
    required: false,
    description: '应用可见范围（部门）',
    example: [1, 2, 3],
  })
  allow_party: number[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '应用可见范围（成员）',
    example: ['zhansan', 'lisi'],
  })
  allow_user: string[];

  @ApiProperty({
    type: 'number',
    isArray: true,
    required: false,
    description: '应用可见范围（标签）',
    example: [1, 2, 3],
  })
  allow_tag: number[];

  @ApiProperty({
    type: 'number',
    isArray: true,
    required: false,
    description: '额外通讯录（部门）',
    example: [4, 5, 6],
  })
  extra_party: number[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '额外通讯录（成员）',
    example: ['wangwu'],
  })
  extra_user: string[];

  @ApiProperty({
    type: 'number',
    isArray: true,
    required: false,
    description: '额外通讯录（标签）',
    example: [4, 5, 6],
  })
  extra_tag: number[];
}
export class AuthInfoAgentSharedFrom {
  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '共享了应用的企业信息，仅当企业互联或者上下游共享应用触发的安装时才返',
    example: 'wwyyyyy',
  })
  corpid: string;

  @ApiProperty({
    type: 'number',
    enum: [0, 1],
    required: false,
    description: '共享了途径，0表示企业互联，1表示上下游',
    example: 1,
  })
  share_type: number;
}

export class AuthInfoAgent {
  @ApiProperty({
    type: 'number',
    required: false,
    description: '授权方应用id',
    example: '',
  })
  agentid: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权方应用名字',
    example: '',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权方应用圆形头像',
    example: '',
  })
  round_logo_url: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权方应用方形头像',
    example: '',
  })
  square_logo_url: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '旧的多应用套件中的对应应用id，新开发者请忽略',
    example: '',
  })
  appid: number;

  @ApiProperty({
    type: 'number',
    required: false,
    enum: [0, 1],
    description: '授权模式，0为管理员授权；1为成员授权',
    example: '',
  })
  auth_mode: number;

  @ApiProperty({
    type: 'boolean',
    required: false,
    description: '是否为代开发自建应用',
    example: '',
  })
  is_customized_app: boolean;

  @ApiProperty({
    type: 'boolean',
    required: false,
    description:
      '来自第三方应用接口唤起,仅通过第三方应用添加自建应用 获取授权链接授权代开发自建应用时，才返回该字段',
    example: '',
  })
  auth_from_thirdapp: boolean;

  @ApiProperty({
    type: AuthInfoAgentPrivilege,
    required: false,
  })
  privilege: AuthInfoAgentPrivilege;

  @ApiProperty({
    type: AuthInfoAgentSharedFrom,
    required: false,
  })
  shared_from: AuthInfoAgentSharedFrom;
}

export class AuthInfo {
  @ApiProperty({
    type: AuthInfoAgent,
    required: false,
    isArray: true,
  })
  agent: AuthInfoAgent[];
}

export class AuthUserInfo {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权管理员的userid，可能为空',
    example: '',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权管理员的open_userid，可能为空',
    example: '',
  })
  open_userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权管理员的name，可能为空',
    example: '',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '授权管理员的头像url，可能为空',
    example: '',
  })
  avatar: string;
}

export class RegisterCodeInfo {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '注册码',
    example: '',
  })
  register_code: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '推广包ID',
    example: '',
  })
  template_id: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '仅当获取注册码指定该字段时才返回',
    example: '',
  })
  state: string;
}

export class GetPermanentCodeResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '授权方（企业）access_token,最长为512字节。代开发自建应用安装时不返回。',
    example: '',
  })
  access_token: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description:
      '授权方（企业）access_token超时时间（秒）。代开发自建应用安装时不返回。',
    example: '',
  })
  expires_in: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '企业微信永久授权码,最长为512字节',
    example: '',
  })
  permanent_code: string;

  @ApiProperty({
    type: DealerCorpInfo,
    required: false,
  })
  dealer_corp_info: DealerCorpInfo;

  @ApiProperty({
    type: AuthCorpInfo,
    required: false,
  })
  auth_corp_info: AuthCorpInfo;

  @ApiProperty({
    type: AuthInfo,
    required: false,
  })
  auth_info: AuthInfo;

  @ApiProperty({
    type: AuthUserInfo,
    required: false,
  })
  auth_user_info: AuthUserInfo;

  @ApiProperty({
    type: RegisterCodeInfo,
    required: false,
  })
  register_code_info: RegisterCodeInfo;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '安装应用时，扫码或者授权链接中带的state值。',
    example: 'state001',
  })
  state: string;
}
