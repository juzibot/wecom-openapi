import { ApiProperty } from '@nestjs/swagger';

export class CorpTag {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '标签的id',
    example: 'TAG_ID1',
  })
  id: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '标签的名称',
    example: 'NAME1',
  })
  name: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '标签创建时间',
    example: '1557838797',
  })
  create_time: number;

  @ApiProperty({
    type: 'number',
    required: false,
    minimum: 0,
    maximum: 2 ^ 32,
    description:
      '标签排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)',
    example: '2',
  })
  order: number;

  @ApiProperty({
    type: 'boolean',
    required: false,
    description: '标签是否已经被删除，只在指定tag_id/group_id进行查询时返回',
    example: 'true',
  })
  deleted: boolean;
}

export class CorpTagGroup {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '标签组id',
    example: 'TAG_GROUPID1',
  })
  group_id: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '标签组名称',
    example: 'GOURP_NAME',
  })
  group_name: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '标签组创建时间',
    example: '1557838797',
  })
  create_time: number;

  @ApiProperty({
    type: 'number',
    required: false,
    minimum: 0,
    maximum: 2 ^ 32,
    description:
      '	标签组排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)',
    example: '2',
  })
  order: number;

  @ApiProperty({
    type: 'boolean',
    required: false,
    description: '标签组是否已经被删除，只在指定tag_id进行查询时返回',
    example: 'true',
  })
  deleted: boolean;

  @ApiProperty({
    type: CorpTag,
    isArray: true,
    description: '标签组内的标签列表',
  })
  tag: CorpTag[];
}
