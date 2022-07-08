import { ApiProperty } from '@nestjs/swagger';

export class SendTextMessageDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '消息内容，最长不超过2048个字节',
  })
  content: string;
}

export class SendMediaMessageDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '媒体文件id，可以调用上传临时素材接口获取',
  })
  media_id: string;
}

export class SendVideoMessageDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '视频媒体文件id，可以调用上传临时素材接口获取',
  })
  media_id: string;

  @ApiProperty({
    type: 'string',
    description: '视频消息的标题，不超过128个字节，超过会自动截断',
  })
  title?: string;

  @ApiProperty({
    type: 'string',
    description: '视频消息的描述，不超过512个字节，超过会自动截断',
  })
  description?: string;
}

export class SendTextcardMessageDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '标题，不超过128个字节，超过会自动截断',
  })
  title: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '描述，不超过512个字节，超过会自动截断',
  })
  description: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '点击后跳转的链接',
  })
  url: string;

  @ApiProperty({
    type: 'string',
    description: '按钮文字。 默认为“详情”， 不超过4个文字，超过自动截断',
  })
  btntxt?: string;
}

export class SendNewsMessageArticlesDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '标题，不超过128个字节，超过会自动截断',
  })
  title: string;

  @ApiProperty({
    type: 'string',
    description: '描述，不超过512个字节，超过会自动截断',
  })
  description?: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '点击后跳转的链接',
  })
  url: string;

  @ApiProperty({
    type: 'string',
    description:
      '图文消息的图片链接，支持JPG、PNG格式，较好的效果为大图 640x320，小图80x80',
  })
  picurl?: string;

  @ApiProperty({
    type: 'string',
    description:
      '按钮文字，仅在图文数为1条时才生效。 默认为“阅读全文”， 不超过4个文字，超过自动截断。该设置只在企业微信上生效，微信插件（原企业号）上不生效。',
  })
  btntxt?: string;
}

export class SendNewsMessageDto {
  @ApiProperty({
    type: SendNewsMessageArticlesDto,
    isArray: true,
    required: true,
    maxLength: 8,
    minLength: 1,
    description: '图文消息，一个图文消息支持1到8条图文',
  })
  articles: SendNewsMessageArticlesDto[];
}

export class SendMpnewsMessageArticlesDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '标题，不超过128个字节，超过会自动截断',
  })
  title: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description:
      '图文消息缩略图的media_id, 可以通过素材管理接口获得。此处thumb_media_id即上传接口返回的media_id',
  })
  thumb_media_id?: string;

  @ApiProperty({
    type: 'string',
    description: '图文消息的作者，不超过64个字节',
  })
  author?: string;

  @ApiProperty({
    type: 'string',
    description: '图文消息点击“阅读原文”之后的页面链接',
  })
  content_source_url?: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '图文消息的内容，支持html标签，不超过666 K个字节',
  })
  content: string;

  @ApiProperty({
    type: 'string',
    description: '图文消息的描述，不超过512个字节，超过会自动截断',
  })
  digest?: string;
}

export class SendMpnewsMessageDto {
  @ApiProperty({
    type: SendNewsMessageArticlesDto,
    isArray: true,
    required: true,
    maxLength: 8,
    minLength: 1,
    description: '图文消息，一个图文消息支持1到8条图文',
  })
  articles: SendMpnewsMessageArticlesDto[];
}

export class SendMarkdownMessageDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'markdown内容，最长不超过2048个字节，必须是utf8编码',
  })
  content: string;
}

export class SendMessageDto {
  @ApiProperty({
    type: 'string',
    isArray: true,
    maxLength: 1000,
    description:
      '成员ID列表（消息接收者，最多支持1000个）。每个元素的格式为： corpid/userid，其中，corpid为该互联成员所属的企业，userid为该互联成员所属企业中的帐号。如果是本企业的成员，则直接传userid即可',
  })
  touser?: string[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    maxLength: 100,
    description:
      '部门ID列表，最多支持100个。partyid在互联圈子内唯一。每个元素都是字符串类型，格式为：linked_id/party_id，其中linked_id是互联id，party_id是在互联圈子中的部门id。如果是本企业的部门，则直接传party_id即可。',
  })
  toparty?: string[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    maxLength: 100,
    description: '本企业的标签ID列表，最多支持100个。',
  })
  totag?: string[];

  @ApiProperty({
    type: 'number',
    format: 'int32',
    description:
      '1表示发送给应用可见范围内的所有人（包括互联企业的成员），默认为0',
  })
  toall?: number;

  @ApiProperty({
    type: 'string',
    required: true,
    description:
      '消息类型，text, image, voice, video, file, textcard, news, mpnews, markdown, miniprogram_notice',
  })
  msgtype: string;

  @ApiProperty({
    type: 'number',
    format: 'int32',
    required: true,
    description: '企业应用的id，整型。可在应用的设置页面查看',
  })
  agentid: number;

  @ApiProperty({
    type: 'number',
    format: 'int32',
    description: '表示是否是保密消息，0表示否，1表示是，默认0',
  })
  safe?: number;

  @ApiProperty({
    type: SendTextMessageDto,
    description: '文本内容',
  })
  text?: SendTextMessageDto;

  @ApiProperty({
    type: SendMediaMessageDto,
    description: '图片',
  })
  image?: SendMediaMessageDto;

  @ApiProperty({
    type: SendMediaMessageDto,
    description: '语音',
  })
  voice?: SendMediaMessageDto;

  @ApiProperty({
    type: SendVideoMessageDto,
    description: '视频',
  })
  video?: SendVideoMessageDto;

  @ApiProperty({
    type: SendMediaMessageDto,
    description: '文件',
  })
  file?: SendMediaMessageDto;

  @ApiProperty({
    type: SendTextcardMessageDto,
    description: '文本卡片',
  })
  textcard?: SendTextcardMessageDto;

  @ApiProperty({
    type: SendNewsMessageDto,
    description: '图文消息',
  })
  news?: SendNewsMessageDto;

  @ApiProperty({
    type: SendMpnewsMessageDto,
    description: '图文消息',
  })
  mpnews?: SendMpnewsMessageDto;

  @ApiProperty({
    type: SendMarkdownMessageDto,
    description: 'markdown',
  })
  markdown?: SendMarkdownMessageDto;
}
