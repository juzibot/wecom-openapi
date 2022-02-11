import { ApiProperty } from '@nestjs/swagger';
import { CorpTagGroup } from './corp-tag-group';

export class AddCorpTagResponse {
  @ApiProperty({ type: CorpTagGroup, required: false })
  tag_group: CorpTagGroup;
}
