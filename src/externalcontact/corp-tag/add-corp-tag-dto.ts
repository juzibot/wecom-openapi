import { ApiProperty } from '@nestjs/swagger';

export class AddCorpTagItem {
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
    minimum: 0,
    maximum: 2 ^ 32,
    description:
      '标签排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)',
    example: '2',
  })
  order: number;
}

export class AddCorpTagDto {
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
    minimum: 0,
    maximum: 2 ^ 32,
    description:
      '	标签组排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)',
    example: '2',
  })
  order: number;

  @ApiProperty({ type: AddCorpTagItem, required: false })
  tag: AddCorpTagItem;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数',
    example: 1000014,
  })
  agentid: number;
}
