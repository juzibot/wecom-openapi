import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';


export class ExternalUserIdInfoItem {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '所属企业id',
  })
  corpid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: '外部联系人id',
  })
  external_userid: string;
}

export class UnionIdToExternalUserIdResponse extends Response {
  @ApiProperty({
    type: ExternalUserIdInfoItem,
    required: false,
    isArray: true,
    description:
      '该服务商第三方应用下的企业的外部联系人ID',
  })
  external_userid_info: ExternalUserIdInfoItem[];
}
