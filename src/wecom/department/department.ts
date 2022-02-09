import { ApiProperty } from '@nestjs/swagger';

export class Department {
  @ApiProperty({ type: 'number', required: false, description: '部门id' })
  id: number;

  @ApiProperty({ type: 'string', required: false, description: '部门名称' })
  name: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '部门名称(英文)',
  })
  name_en: string;

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '部门领导',
  })
  department_leader: string[];

  @ApiProperty({ type: 'number', required: false, description: '上级部门id' })
  parentid: number;

  @ApiProperty({ type: 'number', required: false, description: '排序' })
  order: number;
}
