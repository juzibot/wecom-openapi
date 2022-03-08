import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
import { CorpTagGroup } from './corp-tag-group';

export class AddCorpTagResponse extends Response {
  @ApiProperty({ type: CorpTagGroup, required: false })
  tag_group: CorpTagGroup;
}
