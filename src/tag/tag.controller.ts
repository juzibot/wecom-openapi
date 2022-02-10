import { Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from '../response';

@ApiTags('tag')
@Controller('tag')
export class TagController {
  @Post('create')
  @ApiOperation({
    operationId: 'createTag',
    summary: '创建标签',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90210',
      description: '官方文档',
    },
  })
  public create() {
    return null;
  }

  @Post('update')
  @ApiOperation({
    operationId: 'updateTag',
    summary: '更新标签名字',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90211',
    },
  })
  @ApiOkResponse({ type: Response })
  public update() {
    return null;
  }

  public delete() {
    return null;
  }

  public get() {
    return null;
  }

  public addtagusers() {
    return null;
  }

  public deltagusers() {
    return null;
  }

  public list() {
    return null;
  }
}
