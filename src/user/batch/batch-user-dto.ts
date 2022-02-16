import { ApiProperty } from '@nestjs/swagger';

export class BatchUserCallback {
  @ApiProperty({
    type: 'string',
    required: true,
    description:
      '企业应用接收企业微信推送请求的访问协议和地址，支持http或https协议',
    example: 'xxx',
  })
  url: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '用于生成签名',
    example: 'xxx',
  })
  token: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '用于消息体的加密，是AES密钥的Base64编码',
    example: 'xxx',
  })
  encodingaeskey: string;
}

export class BatchUserDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '上传的csv文件的media_id',
    example: 'xxx',
  })
  media_id: string;

  @ApiProperty({
    type: 'boolean',
    required: false,
    description:
      '是否邀请新建的成员使用企业微信（将通过微信服务通知或短信或邮件下发邀请，每天自动下发一次，最多持续3个工作日），默认值为true。',
    example: 'xxx',
  })
  to_invite: boolean;

  @ApiProperty({
    type: BatchUserCallback,
    required: false,
    description:
      '回调信息。如填写该项则任务完成后，通过callback推送事件给企业。具体请参考应用回调模式中的相应选项',
    example: 'xxx',
  })
  callback: BatchUserCallback;
}
