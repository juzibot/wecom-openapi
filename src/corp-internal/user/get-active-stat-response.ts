import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetActiveStatResponse extends Response {
  @ApiProperty({
    type: 'number',
    required: false,
    description: '活跃成员数',
    example: 100,
  })
  active_cnt: number;
}
