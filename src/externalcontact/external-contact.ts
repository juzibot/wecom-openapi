import { ApiProperty } from '@nestjs/swagger';

export class ExternalProfileAttrText {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '文本属性内容，长度限制32个UTF8字符',
  })
  value: string;
}

export class ExternalProfileAttrWeb {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '网页的url，必须包含http或者https头',
  })
  url: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '网页的展示标题，长度限制12个UTF8字符',
  })
  title: string;
}

export class ExternalProfileAttrMiniprogram {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '小程序appid，必须是有在本企业安装授权的小程序，否则会被忽略',
  })
  appid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '小程序的展示标题，长度限制12个UTF8字符',
  })
  pagepath: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '小程序的页面路径',
  })
  title: string;
}

export class ExternalProfileAttr {
  @ApiProperty({
    enum: [0, 1, 2],
    required: false,
    description: '属性类型: 0-文本 1-网页 2-小程序',
  })
  type: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '属性名称： 需要先确保在管理端有创建该属性，否则会忽略',
  })
  name: string;

  @ApiProperty({
    type: ExternalProfileAttrText,
    required: false,
    description: '文本类型的属性',
  })
  text: ExternalProfileAttrText;

  @ApiProperty({
    type: ExternalProfileAttrWeb,
    required: false,
    description:
      '	网页类型的属性，url和title字段要么同时为空表示清除该属性，要么同时不为空',
  })
  web: ExternalProfileAttrWeb;

  @ApiProperty({
    type: ExternalProfileAttrMiniprogram,
    required: false,
    description:
      '小程序类型的属性，appid和title字段要么同时为空表示清除该属性，要么同时不为空',
  })
  miniprogram: ExternalProfileAttrMiniprogram;
}

export class ExternalProfileWechatChannels {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '视频号名字（设置后，成员将对外展示该视频号）',
    example: '视频号名称',
  })
  nickname: string;

  @ApiProperty({
    enum: [0, 1],
    type: 'number',
    required: false,
    description:
      '对外展示视频号状态。0表示企业视频号已被确认，可正常使用，1表示企业视频号待确认',
    example: 1,
  })
  status: number;
}

export class ExternalProfile {
  @ApiProperty({
    type: ExternalProfileAttr,
    required: false,
    isArray: true,
    description: '属性列表，目前支持文本、网页、小程序三种类型',
  })
  external_attr: ExternalProfileAttr[];

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '企业对外简称，需从已认证的企业简称中选填。可在“我的企业”页中查看企业简称认证状态。',
    example: '企业简称',
  })
  external_corp_name: string;

  @ApiProperty({
    type: ExternalProfileWechatChannels,
    required: false,
    description:
      '视频号属性。须从企业绑定到企业微信的视频号中选择，可在“我的企业”页中查看绑定的视频号。第三方仅通讯录应用可获取；对于非第三方创建的成员，第三方通讯录应用也不可获取。',
  })
  wechat_channels: null;
}

export class ExternalFollowUserTag {
  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '该成员添加此外部联系人所打标签的分组名称（标签功能需要企业微信升级到2.7.5及以上版本）',
  })
  group_name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '该成员添加此外部联系人所打标签名称',
  })
  tag_name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '该成员添加此外部联系人所打企业标签的id，用户自定义类型标签（type=2）不返回',
  })
  tag_id: string;

  @ApiProperty({
    enum: [1, 2, 3],
    required: false,
    description:
      '该成员添加此外部联系人所打标签类型, 1-企业设置，2-用户自定义，3-规则组标签（仅系统应用返回）',
  })
  type: number;
}

export class ExternalFollowUser {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '添加了此外部联系人的企业成员userid',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '该成员对此外部联系人的备注',
  })
  remark: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '该成员对此外部联系人的描述',
  })
  description: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '该成员添加此外部联系人的时间',
  })
  createtime: number;

  @ApiProperty({ type: ExternalFollowUserTag, required: false, isArray: true })
  tags: ExternalFollowUserTag;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '该成员对此客户备注的企业名称',
  })
  remark_corp_name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    isArray: true,
    description:
      '该成员对此客户备注的手机号码，代开发自建应用需要管理员授权才可以获取，第三方不可获取，上游企业不可获取下游企业客户该字段',
  })
  remark_mobiles: string[];

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '发起添加的userid，如果成员主动添加，为成员的userid；如果是客户主动添加，则为客户的外部联系人userid；如果是内部成员共享/管理员分配，则为对应的成员/管理员userid',
  })
  oper_userid: string;

  @ApiProperty({
    enum: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 201, 202],
    type: 'number',
    required: false,
    description: `该成员添加此客户的来源
                  0	未知来源
                  1	扫描二维码
                  2	搜索手机号
                  3	名片分享
                  4	群聊
                  5	手机通讯录
                  6	微信联系人
                  8	安装第三方应用时自动添加的客服人员
                  9	搜索邮箱
                  10	视频号主页添加
                  201	内部成员共享
                  202	管理员/负责人分配`,
  })
  add_way: number;

  @ApiProperty({ type: 'string', isArray: true, required: false })
  tag_id: string[];

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '企业自定义的state参数，用于区分客户具体是通过哪个「联系我」添加，由企业通过创建「联系我」方式指定',
    example: '外联二维码1',
  })
  state: string;
}

export class ExternalContact {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部联系人的userid',
  })
  external_userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部联系人的名称',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '外部联系人的职位，如果外部企业或用户选择隐藏职位，则不返回，仅当联系人类型是企业微信用户时有此字段',
  })
  position: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '外部联系人头像，代开发自建应用需要管理员授权才可以获取，第三方不可获取，上游企业不可获取下游企业客户该字段',
  })
  avatar: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '外部联系人所在企业的简称，仅当联系人类型是企业微信用户时有此字段',
  })
  corp_name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '外部联系人所在企业的主体名称，仅当联系人类型是企业微信用户时有此字段',
  })
  corp_full_name: string;

  @ApiProperty({
    enum: [1, 2],
    type: 'number',
    required: false,
    description:
      '外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户',
  })
  type: number;

  @ApiProperty({
    enum: [0, 1, 2],
    type: 'number',
    required: false,
    description:
      '外部联系人性别 0-未知 1-男性 2-女性。第三方不可获取，上游企业不可获取下游企业客户该字段，返回值为0，表示未定义',
  })
  gender: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '外部联系人在微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来。仅当联系人类型是微信用户，且企业绑定了微信开发者ID有此字段。第三方不可获取，上游企业不可获取下游企业客户的unionid字段',
  })
  unionid: string;

  @ApiProperty({ type: ExternalProfile, required: false })
  external_profile: ExternalProfile;

  @ApiProperty({ type: ExternalFollowUser, required: false, isArray: true })
  follow_user: ExternalFollowUser[];

  @ApiProperty({ type: 'string', required: false })
  next_cursor: string;
}
