import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from '../../response';
import { AddCorpTagDto } from './add-corp-tag-dto';
import { AddCorpTagResponse } from './add-corp-tag-response';
import { DelCorpTagDto } from './del-corp-tag-dto';
import { EditCorpTagDto } from './edit-corp-tag-dto';
import { GetCorpTagDto } from './get-corp-tag-dto';
import { GetCorpTagResponse } from './get-corp-tag-response';
import { MarkTagDto } from './mark-tag-dto';

@ApiTags('externalcontact')
@Controller('externalcontact')
export class CorpTagController {
  @Post('get_corp_tag_list')
  @ApiOperation({
    operationId: 'get_corp_tag_list',
    summary: '获取企业标签列表',
    description: '企业可通过此接口获取企业客户标签详情。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92117',
    },
  })
  @ApiBody({ type: GetCorpTagDto })
  @ApiOkResponse({ type: GetCorpTagResponse })
  public get_corp_tag_list() {
    return null;
  }

  @Post('add_corp_tag')
  @ApiOperation({
    operationId: 'add_corp_tag',
    summary: '添加企业客户标签',
    description:
      '企业可通过此接口向客户标签库中添加新的标签组和标签，每个企业最多可配置3000个企业标签。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92117',
    },
  })
  @ApiBody({ type: AddCorpTagDto })
  @ApiOkResponse({ type: AddCorpTagResponse })
  public add_corp_tag() {
    return null;
  }

  @Post('edit_corp_tag')
  @ApiOperation({
    operationId: 'edit_corp_tag',
    summary: '编辑企业客户标签',
    description: '企业可通过此接口编辑客户标签/标签组的名称或次序值。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92117',
    },
  })
  @ApiBody({ type: EditCorpTagDto })
  @ApiOkResponse({ type: Response })
  public edit_corp_tag() {
    return null;
  }

  @Post('del_corp_tag')
  @ApiOperation({
    operationId: 'del_corp_tag',
    summary: '删除企业客户标签',
    description: '企业可通过此接口编辑客户标签/标签组的名称或次序值。',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92117',
    },
  })
  @ApiBody({ type: DelCorpTagDto })
  @ApiOkResponse({ type: Response })
  public del_corp_tag() {
    return null;
  }

  @Post('mark_tag')
  @ApiOperation({
    operationId: 'mark_tag',
  })
  @ApiBody({
    type: MarkTagDto,
    description: `请确保external_userid是userid的外部联系人。
                  add_tag和remove_tag不可同时为空。
                  同一个标签组下现已支持多个标签`,
  })
  @ApiOkResponse({ type: Response })
  public mark_tag() {
    return null;
  }
}
