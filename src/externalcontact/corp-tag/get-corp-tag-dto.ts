import { ApiProperty } from '@nestjs/swagger';

export class GetCorpTagDto {
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
}
