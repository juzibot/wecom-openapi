import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

export class GetUserIdResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: true,
    description:
      '成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节',
    example: 'zhangsan',
  })
  userid: string;
}
