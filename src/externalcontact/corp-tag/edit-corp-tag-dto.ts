import { ApiProperty } from '@nestjs/swagger';

export class EditCorpTagDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '标签或标签组的id',
    example: 'TAG_ID',
  })
  id: string;

  @ApiProperty({
    type: 'string',
    required: false,
    maxLength: 30,
    description: '新的标签或标签组名称，最长为30个字符',
    example: 'NEW_TAG_NAME',
  })
  name: string;

  @ApiProperty({
    type: 'number',
    required: false,
    minimum: 0,
    maximum: 2 ^ 32,
    description:
      '标签/标签组的次序值。order值大的排序靠前。有效的值范围是[0, 2^32)',
    example: 1,
  })
  order: number;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数',
    example: 1000014,
  })
  agentid: number;
}
