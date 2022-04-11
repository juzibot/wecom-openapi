import { ApiProperty } from '@nestjs/swagger';

export class ListContactWayDto {
  @ApiProperty({
    type: 'number',
    required: false,
    description: '「联系我」创建起始时间戳, 默认为90天前',
    example: 1622476800,
  })
  start_time: number;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '「联系我」创建结束时间戳, 默认为当前时间',
    example: 1625068800,
  })
  end_time: number;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '分页查询使用的游标，为上次请求返回的 next_cursor',
    example: 'CURSOR',
  })
  cursor: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '每次查询的分页大小，默认为100条，最多支持1000条',
    example: 1000,
  })
  limit: number;
}
