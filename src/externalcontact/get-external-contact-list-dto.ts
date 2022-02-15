import { ApiProperty } from '@nestjs/swagger';

export class GetExternalContactListDto {
  @ApiProperty({
    type: 'string',
    isArray: true,
    required: true,
    maxLength: 100,
    description: '企业成员的userid列表，字符串类型，最多支持100个',
  })
  userid_list: string[];

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填',
  })
  cursor: string;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    maximum: 100,
    default: 50,
    description:
      '返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值',
  })
  limit: number;
}
