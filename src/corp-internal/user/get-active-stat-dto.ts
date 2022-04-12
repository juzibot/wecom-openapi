import { ApiProperty } from '@nestjs/swagger';

export class GetActiveStatDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '具体某天的活跃人数，最长支持获取30天前数据',
    example: '2020-03-27',
  })
  date: string;
}
