import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class WebAuthenticationResponse extends Response {
    @ApiProperty({
        type: 'number',
        format: 'int64',
        required: false,
        description: '错误码',
    })
    errcode: number;

    @ApiProperty({
        type: 'string',
        format: 'int64',
        required: false,
        description: '错误信息',
    })
    errmsg: string;

    @ApiProperty({
        type: 'string',
        required: false,
        description: '成员UserID',
    })
    UserId: string;

    @ApiProperty({
        type: 'string',
        required: false,
        description: '手机设备号(由企业微信在安装时随机生成，删除重装会改变，升级不受影响)',
    })
    DeviceId: string;

    @ApiProperty({
        type: 'string',
        required: false,
        description: '非企业成员的标识，对当前企业唯一',
    })
    OpenId: string;

    @ApiProperty({
        type: 'string',
        required: false,
        description: '外部联系人id，当且仅当用户是企业的客户，且跟进人在应用的可见范围内时返回。如果是第三方应用调用，针对同一个客户，同一个服务商不同应用获取到的id相同',
    })
    external_userid: string;
}
