import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from '../../response';
import { AddTagUsersResponse } from './add-tag-users-response';
import { CreateTagDto } from './create-tag-dto';
import { CreateTagResponse } from './create-tag-response';
import { DelTagUsersDto } from './del-tag-users-dto';
import { GetTagUsersResponse } from './get-tag-users-response';
import { ListTagResponse } from './list-tag-response';
import { UpdateTagDto } from './update-tag-dto';

@ApiTags('tag')
@Controller('tag')
export class TagController {
  @Post('create')
  @ApiOperation({
    operationId: 'createTag',
    summary: '创建标签',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90210',
    },
  })
  @ApiBody({ type: CreateTagDto })
  @ApiOkResponse({ type: CreateTagResponse })
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
  @ApiBody({ type: UpdateTagDto })
  @ApiOkResponse({ type: Response })
  public update() {
    return null;
  }

  @Get('delete')
  @ApiOperation({
    operationId: 'deleteTag',
    summary: '删除标签',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90212',
    },
  })
  @ApiQuery({
    name: 'tagid',
    required: true,
    type: 'number',
    description: '标签ID',
  })
  @ApiOkResponse({ type: Response })
  public delete() {
    return null;
  }

  @Get('get')
  @ApiOperation({
    operationId: 'getTagUsers',
    summary: '获取标签成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90213',
    },
  })
  @ApiQuery({
    name: 'tagid',
    required: true,
    type: 'number',
    description: '标签ID',
  })
  @ApiOkResponse({ type: GetTagUsersResponse })
  public get() {
    return null;
  }

  @Post('addtagusers')
  @ApiOperation({
    operationId: 'addTagUsers',
    summary: '增加标签成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90214',
    },
  })
  @ApiBody({ type: DelTagUsersDto })
  @ApiOkResponse({ type: AddTagUsersResponse })
  public addtagusers() {
    return null;
  }

  @Post('deltagusers')
  @ApiOperation({
    operationId: 'delTagUsers',
    summary: '删除标签成员',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90216',
    },
  })
  @ApiBody({ type: DelTagUsersDto })
  @ApiOkResponse({ type: Response })
  public deltagusers() {
    return null;
  }

  @Get('list')
  @ApiOperation({
    operationId: 'listTag',
    summary: '获取标签列表',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90216',
    },
  })
  @ApiOkResponse({ type: ListTagResponse })
  list() {
    return null;
  }
}
