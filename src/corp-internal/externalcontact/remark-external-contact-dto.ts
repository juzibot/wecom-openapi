import { ApiProperty } from '@nestjs/swagger';

export class RemarkExternalContactDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '企业成员的userid',
    example: 'zhangsan',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: '外部联系人userid',
    example: 'woAJ2GCAAAd1asdasdjO4wKmE8Aabj9AAA',
  })
  external_userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '此用户对外部联系人的备注，最多20个字符',
    example: '备注信息',
  })
  remark: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '此用户对外部联系人的描述，最多150个字符',
    example: '描述信息',
  })
  description: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '此用户对外部联系人备注的所属公司名称，最多20个字符',
    example: '腾讯科技',
  })
  remark_company: string;

  @ApiProperty({
    type: 'string',
    required: false,
    isArray: true,
    description: '此用户对外部联系人备注的手机号',
    example: '["13800000001", "13800000002"]',
  })
  remark_mobiles: string[];

  @ApiProperty({
    type: 'string',
    required: false,
    description: '备注图片的mediaid',
    example: 'MEDIAID',
  })
  remark_pic_mediaid: string;
}
