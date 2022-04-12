import { ApiProperty } from '@nestjs/swagger';

export class CloseTempChatDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '企业成员的userid',
    example: 'zhangyisheng',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '客户的外部联系人userid',
    example: 'woAJ2GCAAAXtWyujaWJHDDGi0mACHAAA',
  })
  external_userid: string;
}
