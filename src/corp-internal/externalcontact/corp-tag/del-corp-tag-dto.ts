import { ApiProperty } from '@nestjs/swagger';

export class DelCorpTagDto {
  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '标签的id列表',
    example: '["TAG_ID_1", "TAG_ID_2"]',
  })
  tag_id: string[];

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '标签组的id列表',
    example: '["GROUP_ID_1", "GROUP_ID_2"]',
  })
  group_id: string[];

  @ApiProperty({
    type: 'number',
    required: false,
    description: '授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数',
    example: 1000014,
  })
  agentid: number;
}
