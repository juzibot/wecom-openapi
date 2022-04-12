import { ApiProperty } from '@nestjs/swagger';

export class MarkTagDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '添加外部联系人的userid',
    example: 'zhangsan',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '外部联系人userid',
    example: 'woAJ2GCAAAd1NPGHKSD4wKmE8Aabj9AAA',
  })
  external_userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    isArray: true,
    description: '要标记的标签列表',
    example: '["TAGID1","TAGID2"]',
  })
  add_tag: string[];

  @ApiProperty({
    type: 'string',
    required: false,
    isArray: true,
    description: '要标记的标签列表',
    example: '["TAGID3","TAGID4"]',
  })
  remove_tag: string[];
}
