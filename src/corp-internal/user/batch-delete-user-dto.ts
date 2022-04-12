import { ApiProperty } from '@nestjs/swagger';

export class BatchDeleteUserDto {
  @ApiProperty({
    type: 'string',
    isArray: true,
    required: true,
    maxLength: 200,
    description:
      '成员UserID列表。对应管理端的帐号。最多支持200个。若存在无效UserID，直接返回错误',
    example: ['zhangsan', 'lisi'],
  })
  useridlist: string[];
}
