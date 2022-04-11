import { ApiProperty } from '@nestjs/swagger';

export class GetContactWayDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '联系方式的配置id',
    example: '42b34949e138eb6e027c123cba77fad7',
  })
  config_id: string;
}
