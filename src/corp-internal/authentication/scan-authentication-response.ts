import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class ScanAuthenticationResponse extends Response {
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
        description: '非企业成员的标识，对当前企业唯一',
    })
    OpenId: string;
}
