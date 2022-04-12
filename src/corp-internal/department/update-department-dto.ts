import { ApiProperty } from '@nestjs/swagger';

export class UpdateDepartmentDto {
  @ApiProperty({ type: 'number', required: true, description: '部门id' })
  id: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '部门名称。长度限制为1~32个字符，字符不能包括:*?"<>｜',
    minLength: 1,
    maxLength: 32,
    pattern: '^[^*"<>｜]+$',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '英文名称，需要在管理后台开启多语言支持才能生效。长度限制为1~32个字符，字符不能包括:*?"<>｜',
    minLength: 1,
    maxLength: 32,
    pattern: '^[^*"<>｜]+$',
  })
  name_en: string;

  @ApiProperty({ type: 'number', required: false, description: '父部门id' })
  parentid: number;

  @ApiProperty({
    type: 'number',
    required: false,
    description:
      '在父部门中的次序值。order值大的排序靠前。有效的值范围是[0, 2^32)',
    minimum: 0,
    maximum: 2 ^ 32,
  })
  order: number;
}
