import { ApiProperty } from '@nestjs/swagger';

export class Tag {
  @ApiProperty({ type: 'number', description: '标签ID', example: 1 })
  tagid: number;

  @ApiProperty({ type: 'string', description: '标签名称', example: '标签名称' })
  tagname: string;
}
