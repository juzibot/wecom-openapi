import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class ListExternalContactResponse extends Response {
  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '外部联系人的userid列表',
    example:
      '["woAJ2GCAAAXtWyujaWJHDDGi0mACAAA", "wmqfasd1e1927831291723123109rAAA"]',
  })
  external_userid: string[];
}
