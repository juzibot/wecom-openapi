import { ApiProperty } from '@nestjs/swagger';

export class UpdateTagDto {
  @ApiProperty({
    type: 'number',
    required: true,
    example: '12',
    description: '标签ID',
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
