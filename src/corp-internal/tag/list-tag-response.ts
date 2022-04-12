import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
import { Tag } from './tag';

export class ListTagResponse extends Response {
  @ApiProperty({ type: Tag, isArray: true })
  taglist: Tag[];
}
