import { ApiProperty } from '@nestjs/swagger';

export class GetCustomizedAuthUrlBody {
  @ApiProperty({
    type: 'string',
    description: 'stage值',
    required: true,
    example: 'stage_value',
  })
  stage: string;

  @ApiProperty({
    type: 'string',
    description: '代开发自建应用模版ID列表，数量不能超过9个',
    isArray: true,
    required: true,
    example: '["dk1","dk2"]',
  })
  templateid_list: string[];
}
