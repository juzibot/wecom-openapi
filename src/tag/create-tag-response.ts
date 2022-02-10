import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

export class CreateTagResponse extends Response {
  @ApiProperty({ type: 'number', description: '标签id', example: '12' })
  tagid: number;
}
