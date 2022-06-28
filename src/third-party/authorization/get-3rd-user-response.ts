import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class UserExtattrAttrText {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部属性-文本',
  })
  value: string;
}
export class UserExtattrAttrWeb {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部属性-地址',
  })
  url: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部属性-标题',
  })
  title: string;
}
export class UserExtattrAttrMiniProgram {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部属性-应用id',
  })
  appid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部属性-地址',
  })
  pagepath: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部属性-标题',
  })
  title: string;
}
export class UserExtattrAttr {
  @ApiProperty({
    type: 'number',
    required: false,
    description: '外部属性-类型',
  })
  type: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部属性-名字',
  })
  name: string;

  @ApiProperty({
    type: UserExtattrAttrText,
    required: false,
    description: '外部属性-文本',
  })
  text: UserExtattrAttrText;

  @ApiProperty({
    type: UserExtattrAttrWeb,
    required: false,
    description: '外部属性-网页',
  })
  web: UserExtattrAttrWeb;

  @ApiProperty({
    type: UserExtattrAttrMiniProgram,
    required: false,
    description: '外部属性-小程序',
  })
  miniprogram: UserExtattrAttrMiniProgram;
}
export class UserExtattr {
  @ApiProperty({
    type: UserExtattrAttr,
    required: false,
    isArray: true,
    description: '外部属性',
  })
  attrs: UserExtattrAttr[];
}

export class UserExternalProfileWechatChannels {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '名字',
  })
  nickname: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '名字',
  })
  status: number;
}
export class UserExternalProfile {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '对外企业名',
  })
  external_corp_name: string;

  @ApiProperty({
    type: UserExternalProfileWechatChannels,
    required: false,
    description: '视频号',
  })
  wechat_channels: UserExternalProfileWechatChannels;

  @ApiProperty({
    type: UserExtattrAttr,
    required: false,
    description: '对外属性',
  })
  external_attr: UserExtattrAttr;
}

export class Get3rdUserResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '员工id',
  })
  userid: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '名字',
  })
  name: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '手机号',
  })
  mobile: string;
  @ApiProperty({
    type: 'number',
    required: false,
    isArray: true,
    description: '部门列表',
  })
  department: number[];
  @ApiProperty({
    type: 'number',
    required: false,
    isArray: true,
    description: '部门内的排序值',
  })
  order: number[];

  @ApiProperty({
    type: 'string',
    required: false,
    description: '职务信息',
  })
  position: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '性别',
  })
  gender: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '邮箱',
  })
  email: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '企业邮箱',
  })
  biz_mail: string;
  @ApiProperty({
    type: 'number',
    required: false,
    isArray: true,
    description: '表示在所在的部门内是否为部门负责人',
  })
  is_leader_in_dept: number[];
  @ApiProperty({
    type: 'string',
    required: false,
    description: '直属上级UserID',
  })
  direct_leader: string[];
  @ApiProperty({
    type: 'string',
    required: false,
    description: '头像url',
  })
  avatar: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '头像缩略图url',
  })
  thumb_avatar: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '座机',
  })
  telephone: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '别名',
  })
  alias: string;
  @ApiProperty({
    type: UserExtattr,
    required: false,
    description: '扩展属性',
  })
  extattr: UserExtattr;
  @ApiProperty({
    type: 'number',
    required: false,
    description: '激活状态: 1=已激活，2=已禁用，4=未激活，5=退出企业。',
  })
  status: number;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '员工个人二维码',
  })
  qr_code: string;
  @ApiProperty({
    type: UserExternalProfile,
    required: false,
    description: '成员对外属性',
  })
  external_profile: UserExternalProfile;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '对外职务',
  })
  external_position: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '地址',
  })
  address: string;
  @ApiProperty({
    type: 'string',
    required: false,
    description: '全局唯一',
  })
  open_userid: string;
  @ApiProperty({
    type: 'number',
    required: false,
    description: '主部门',
  })
  main_department: number;
}
