import { ApiProperty } from '@nestjs/swagger';

export class WelcomeMsgText {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  content: string;
}

export class WelcomeMsgImage {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  media_id: string;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  pic_url: string;
}

export class WelcomeMsgLink {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  title: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  picurl: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  desc: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  url: string;
}

export class WelcomeMsgMiniProgram {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  title: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  pic_media_id: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  appid: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  page: string;
}

export class WelcomeMsgVideo {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  media_id: string;
}

export class WelcomeMsgFile {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  media_id: string;
}

export class WelcomeMsgAttachment {
  @ApiProperty({
    type: 'string',
    enum: ['image', 'link', 'miniprogram', 'video', 'file'],
    required: true,
  })
  msgtype: string;

  @ApiProperty({
    type: WelcomeMsgImage,
    required: false,
  })
  image: WelcomeMsgImage;

  @ApiProperty({
    type: WelcomeMsgLink,
    required: false,
  })
  link: WelcomeMsgLink;

  @ApiProperty({
    type: WelcomeMsgMiniProgram,
    required: false,
  })
  miniprogram: WelcomeMsgMiniProgram;

  @ApiProperty({
    type: WelcomeMsgVideo,
    required: false,
  })
  video: WelcomeMsgVideo;

  @ApiProperty({
    type: WelcomeMsgFile,
    required: false,
  })
  file: WelcomeMsgFile;
}

export class SendWelcomeMsgDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  welcome_code: string;

  @ApiProperty({
    type: WelcomeMsgText,
    required: false,
  })
  text: WelcomeMsgText;

  @ApiProperty({
    type: WelcomeMsgAttachment,
    required: false,
    isArray: true,
  })
  attachments: WelcomeMsgAttachment[];
}
