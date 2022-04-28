import { ApiProperty } from '@nestjs/swagger';

export class Response {
  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    description: '错误码',
  })
  errcode: number;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '错误信息',
  })
  errmsg: string;
}
