import { ApiProperty } from '@nestjs/swagger';

export class ContactWayConclusionsText {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '文本消息内容',
    example: '文本消息内容',
  })
  content: string;
}

export class ContactWayConclusionsImage {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'MEDIA_ID',
    example: 'MEDIA_ID',
  })
  media_id: string;
}

export class ContactWayConclusionsLink {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '消息标题',
    example: '消息标题',
  })
  title: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '',
    example: 'https://example.pic.com/path',
  })
  picurl: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '',
    example: '消息描述',
  })
  desc: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '',
    example: 'https://example.link.com/path',
  })
  url: string;
}

export class ContactWayConclusionsMiniprogram {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '',
    example: '消息标题',
  })
  title: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '',
    example: 'MEDIA_ID',
  })
  pic_media_id: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '',
    example: 'wx8bd80126147dfAAA',
  })
  appid: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '',
    example: '/path/index.html',
  })
  page: string;
}

export class ContactWayConclusions {
  @ApiProperty({
    type: ContactWayConclusionsText,
    required: false,
  })
  text: ContactWayConclusionsText;

  @ApiProperty({
    type: ContactWayConclusionsImage,
    required: false,
  })
  image: ContactWayConclusionsImage;

  @ApiProperty({
    type: ContactWayConclusionsLink,
    required: false,
  })
  link: ContactWayConclusionsLink;

  @ApiProperty({
    type: ContactWayConclusionsMiniprogram,
    required: false,
  })
  miniprogram: ContactWayConclusionsMiniprogram;
}

export class ContactWay {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '联系方式的配置id',
    example: '42b34949e138eb6e027c123cba77fad7',
  })
  config_id: string;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: true,
    enum: [1, 2],
    description: '联系方式类型,1-单人, 2-多人',
    example: 1,
  })
  type: number;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    enum: [1, 2],
    required: true,
    description: '场景，1-在小程序中联系，2-通过二维码联系',
    example: 1,
  })
  scene: number;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    enum: [1, 2, 3],
    description:
      '在小程序中联系时使用的控件样式; 单人模式 1，2，3；多人模式 1，2',
    example: 1,
  })
  style: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '联系方式的备注信息，用于助记，不超过30个字符',
    example: '渠道客户',
  })
  remark: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '联系二维码的URL，仅在scene为2时返回',
    example: 'http://p.qpic.cn/wwhead/duc2TvpEgSdicZ9RrdUtBkv2UiaA/0',
  })
  qr_code: string;

  @ApiProperty({
    type: 'boolean',
    required: false,
    description: '外部客户添加时是否无需验证，默认为true',
    example: true,
  })
  skip_verify: boolean;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '企业自定义的state参数，用于区分不同的添加渠道，在调用“获取外部联系人详情”时会返回该参数值，不超过30个字符',
    example: 'teststate',
  })
  state: string;

  @ApiProperty({
    type: 'string',
    required: false,
    isArray: true,
    description:
      '使用该联系方式的用户userID列表，在type为1时为必填，且只能有一个',
    example: ['zhangsan', 'lisi', 'wangwu'],
  })
  user: string[];

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    isArray: true,
    description: '使用该联系方式的部门id列表，只在type为2时有效',
    example: [2, 3],
  })
  party: number[];

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    description: '是否临时会话模式，true表示使用临时会话模式，默认为false',
    example: true,
  })
  is_temp: boolean;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    description:
      '	临时会话二维码有效期，以秒为单位。该参数仅在is_temp为true时有效，默认7天，最多为14天',
    example: 86400,
  })
  expires_in: number;

  @ApiProperty({
    type: 'number',
    format: 'int64',

    required: false,
    description:
      '临时会话有效期，以秒为单位。该参数仅在is_temp为true时有效，默认为添加好友后24小时，最多为14天',
    example: 86400,
  })
  chat_expires_in: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '可进行临时会话的客户unionid',
    example: 'oxTWIuGaIt6gTKsQRLau2M0AAAA',
  })
  unionid: string;

  @ApiProperty({
    type: ContactWayConclusions,
    required: false,
  })
  conclusions: ContactWayConclusions;
}
