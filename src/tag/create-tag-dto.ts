import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    type: 'number',
    required: false,
    example: '12',
    description:
      '标签id，非负整型，指定此参数时新增的标签会生成对应的标签id，不指定时则以目前最大的id自增。',
  })
  tagid: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: '乒乓球协会',
    description:
      '标签名称，长度限制为32个字（汉字或英文字母），标签不可与其他标签重名。',
    maxLength: 32,
  })
  tagname: string;
}
