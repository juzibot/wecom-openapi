import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class UploadResponse extends Response {
  @ApiProperty({
    type: 'string',
    enum: ['image', 'voice', 'video', 'file'],
    required: false,
    description:
      '媒体文件类型，分别有图片（image）、语音（voice）、视频（video），普通文件(file)',
    example: 'image',
  })
  type: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '媒体文件上传后获取的唯一标识，3天内有效',
    example: '1G6nrLmr5EC3MMb_-zK1dDdzmd0p7cNliYu9V5w7o8K0',
  })
  media_id: string;

  @ApiProperty({
    type: 'string',
    format: 'int64',
    required: false,
    description: '媒体文件上传时间戳',
    example: '1380000000',
  })
  created_at: string;
}
