import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
import { CorpTagGroup } from './corp-tag-group';

export class GetCorpTagResponse extends Response {
  @ApiProperty({
    type: CorpTagGroup,
    isArray: true,
    required: false,
    description: '标签组列表',
  })
  tag_group: CorpTagGroup[];
}
