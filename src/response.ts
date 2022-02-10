import { ApiProperty } from '@nestjs/swagger';

export class Response {
  @ApiProperty({ type: 'number', required: true, description: '错误码' })
  errcode: number;

  @ApiProperty({ type: 'string', required: true, description: '错误信息' })
  errmsg: string;
}
