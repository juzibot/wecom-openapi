import { ApiProperty } from '@nestjs/swagger';

export class GetAgentInfoDto {
  @ApiProperty({
    type: 'string',
    description: '应用id',
    required: true,
    example: '1000003',
  })
  agentid: string;
}
