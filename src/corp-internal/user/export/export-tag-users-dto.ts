import { ApiProperty } from '@nestjs/swagger';
import { ExportUserDto } from './export-user-dto';

export class ExportTagUsersDto extends ExportUserDto {
  @ApiProperty({
    type: 'number',
    required: true,
    description: '需要导出的标签',
    example: 1,
  })
  tagid: number;
}
