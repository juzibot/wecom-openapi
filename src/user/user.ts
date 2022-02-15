import { ApiProperty } from '@nestjs/swagger';
import {
  ExternalProfile,
  ExternalProfileAttr,
} from '../externalcontact/external-contact';

export class User {
  @ApiProperty({
    type: 'string',
    required: true,
    description:
      '成员UserID。对应管理端的帐号，企业内必须唯一。长度为1~64个字节。只能由数字、字母和“_-@.”四种字符组成，且第一个字符必须是数字或字母。系统进行唯一性检查时会忽略大小写。',
    example: 'zhangsan',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '成员名称。长度为1~64个utf8字符',
    example: '张三',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '成员别名。长度1~64个utf8字符',
    example: 'jackzhang',
  })
  alias: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '手机号码。企业内必须唯一，mobile/email二者不能同时为空',
    example: '+86 13800000000',
  })
  mobile: string;

  @ApiProperty({
    type: 'number',
    required: true,
    isArray: true,
    maxLength: 100,
    description: '成员所属部门id列表，不超过100个',
    example: [1, 2],
  })
  department: number[];

  @ApiProperty({
    type: 'number',
    required: false,
    isArray: true,
    minimum: 0,
    maximum: 2 ^ 32,
    description:
      '部门内的排序值，默认为0，成员次序以创建时间从小到大排列。个数必须和参数department的个数一致，数值越大排序越前面。有效的值范围是[0, 2^32)',
    example: [10, 40],
  })
  order: number[];

  @ApiProperty({
    type: 'string',
    required: false,
    description: '职务信息。长度为0~128个字符',
    example: '产品经理',
  })
  position: string;

  @ApiProperty({
    enum: ['1', '2'],
    type: 'string',
    required: false,
    description: '性别。1表示男性，2表示女性',
    example: '1',
  })
  gender: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '邮箱。长度6~64个字节，且为有效的email格式。企业内必须唯一，mobile/email二者不能同时为空',
    example: 'zhangsan@gzdev.com',
  })
  email: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '企业邮箱。仅对开通企业邮箱的企业有效。长度6~64个字节，且为有效的企业邮箱格式。企业内必须唯一。未填写则系统会为用户生成默认企业邮箱（可修改一次）',
    example: 'zhangsan@qyycs2.wecom.work',
  })
  biz_mail: string;

  @ApiProperty({
    type: 'number',
    required: false,
    isArray: true,
    description:
      '个数必须和参数department的个数一致，表示在所在的部门内是否为部门负责人。1表示为部门负责人，0表示非部门负责人。在审批(自建、第三方)等应用里可以用来标识上级审批人',
    example: [1, 0],
  })
  is_leader_in_dept: number[];

  @ApiProperty({
    type: 'string',
    required: false,
    isArray: true,
    description: '直属上级UserID，设置范围为企业内成员，可以设置最多5个上级',
    example: ['lisi', 'wangwu'],
  })
  direct_leader: string[];

  @ApiProperty({
    enum: [0, 1],
    type: 'number',
    required: false,
    description: '启用/禁用成员。1表示启用成员，0表示禁用成员',
    example: 1,
  })
  enable: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '成员头像的mediaid，通过素材管理接口上传图片获得的mediaid',
    example: '2-G6nrLmr5EC3MNb_-zL1dDdzkd0p7cNliYu9V5w7o8K0',
  })
  avatar_mediaid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '座机。32字节以内，由纯数字、“-”、“+”或“,”组成。',
    example: '020-123456',
  })
  telephone: string;

  @ApiProperty({
    type: 'string',
    required: false,
    maxLength: 128,
    description: '地址。长度最大128个字符',
    example: '广州市海珠区新港中路',
  })
  address: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '主部门',
    example: 1,
  })
  main_department: number;

  @ApiProperty({
    type: ExternalProfileAttr,
    required: false,
    description:
      '自定义字段。自定义字段需要先在WEB管理端添加，见扩展属性添加方法，否则忽略未知属性的赋值。',
  })
  extattr: ExternalProfileAttr;

  @ApiProperty({
    type: 'boolean',
    required: false,
    default: true,
    description:
      '是否邀请该成员使用企业微信（将通过微信服务通知或短信或邮件下发邀请，每天自动下发一次，最多持续3个工作日），默认值为true。',
    example: true,
  })
  to_invite: boolean;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '对外职务，如果设置了该值，则以此作为对外展示的职务，否则以position来展示。长度12个汉字内',
    example: '高级产品经理',
  })
  external_position: string;

  @ApiProperty({
    type: ExternalProfile,
    required: false,
    description: '成员对外属性，字段详情见对外属性',
  })
  external_profile: ExternalProfile;

  @ApiProperty({ type: 'number', required: false, example: 0 })
  hide_mobile: number;

  @ApiProperty({ type: 'string', required: false, example: 'jacky' })
  english_name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    example: 'xxxxxx',
    description:
      '全局唯一。对于同一个服务商，不同应用获取到企业内同一个成员的open_userid是相同的，最多64个字节。仅第三方应用可获取',
  })
  open_userid: string;
}
