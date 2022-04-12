import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class AddTagUsersResponse extends Response {
  @ApiProperty({ type: 'string', required: false, example: 'usr1|usr2|usr' })
  invalidlist: string;

  @ApiProperty({
    type: 'number',
    isArray: true,
    required: false,
    example: '[2,4]',
  })
  invalidparty: number[];
}
