import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../../response';

export class BatchUserResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '异步任务id，最大长度为64字节',
    example: 'xxx',
  })
  jobid: string;
}
