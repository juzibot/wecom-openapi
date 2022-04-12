import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../../response';

export class ExportUserResultItem {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '数据下载链接,支持指定Range头部分段下载。有效期2个小时',
    example: 'http://xxxxxx/xxxxxx',
  })
  url: string;

  @ApiProperty({
    type: 'number',
    required: true,
    description: '密文数据大小',
    example: 123,
  })
  size: number;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '密文数据md5',
    example: 'xxxxxxxx',
  })
  md5: string;
}

export class ExportUserResultResponse extends Response {
  @ApiProperty({
    enum: [0, 1, 2, 3],
    type: 'number',
    required: false,
    description: '任务状态:0-未处理，1-处理中，2-完成，3-异常失败',
    example: 1,
  })
  status: number;

  @ApiProperty({
    type: ExportUserResultItem,
    required: true,
    isArray: true,
    description: '数据文件列表',
  })
  data_list: ExportUserResultItem;
}
