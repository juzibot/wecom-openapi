import { ApiProperty } from '@nestjs/swagger';
import { User } from './user';

export class UpdateUserDto extends User {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '成员名称。长度为1~64个utf8字符',
    example: '张三',
  })
  name: string;

  @ApiProperty({
    type: 'number',
    required: false,
    isArray: true,
    maxLength: 100,
    description: '成员所属部门id列表，不超过100个',
    example: [1, 2],
  })
  department: number[];
}
