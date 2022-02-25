import { ApiProperty } from '@nestjs/swagger';

export class GetSuiteTokenDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '以ww或wx开头应用id（对应于旧的以tj开头的套件id）',
    example: 'wwddddccc7775555aaa',
  })
  suite_id: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '应用secret',
    example: 'ldAE_H9anCRN21GKXVfdAAAAAAAAAAAAAAAAAA',
  })
  suite_secret: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '企业微信后台推送的ticket',
    example: 'Cfp0_givEagXcYJIztF6sfbdmIZCmpaR8ZBsvJEFFNBrWmnD5-CGYJ3_NhYexMyw',
  })
  suite_ticket: string;
}
