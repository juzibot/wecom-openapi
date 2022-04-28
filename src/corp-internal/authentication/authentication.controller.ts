import { Controller, Get, Post } from '@nestjs/common';
import {
    ApiOkResponse,
    ApiOperation,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import {ScanAuthenticationResponse} from "./scan-authentication-response";
import {WebAuthenticationResponse} from "./web-authentication-response";

@ApiTags('authentication')
@Controller('user')
export class AuthenticationController {
    @Get('getuserinfo')
    @ApiOperation({
        operationId: 'web getuserinfo',
        summary: '获取web访问用户身份',
        externalDocs: {
            url: 'https://developer.work.weixin.qq.com/document/path/91023',
        },
    })
    @ApiQuery({
        name: 'code',
        required: true,
        type: 'string',
        description: '通过成员授权获取到的code',
    })
    @ApiOkResponse({ type: ScanAuthenticationResponse })
    public getuserinfo() {
        return null;
    }

    @Get('get')
    @ApiOperation({
        operationId: 'scan getuserinfo',
        summary: '获取扫码访问用户身份',
        externalDocs: {
            url: 'https://developer.work.weixin.qq.com/document/path/91437',
        },
    })
    @ApiQuery({
        name: 'code',
        required: true,
        type: 'string',
        description: '通过成员授权获取到的code',
    })
    @ApiOkResponse({ type: WebAuthenticationResponse })
    public get() {
        return null;
    }
}
