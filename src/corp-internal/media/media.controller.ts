import { Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { UploadImgResponse } from './upload-img-response';
import { UploadResponse } from './upload-response';

@Controller('media')
export class MediaController {
  @Post('/upload')
  @ApiOperation({
    operationId: 'upload',
    description:
      '素材上传得到media_id，该media_id仅三天内有效, media_id在同一企业内应用之间可以共享',
    summary: '上传临时素材',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90253',
    },
  })
  @ApiQuery({
    name: 'type',
    required: true,
    type: 'string',
    enum: ['image', 'voice', 'video', 'file'],
  })
  @ApiOkResponse({
    type: UploadResponse,
  })
  public upload() {
    return null;
  }

  @Post('/uploadimg')
  @ApiOperation({
    operationId: 'uploadimg',
    description: '上传图片得到图片URL，该URL永久有效',
    summary: '上传图片',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90256',
    },
  })
  @ApiOkResponse({
    type: UploadImgResponse,
  })
  public uploadimg() {
    return null;
  }

  @Get('/get')
  @ApiOperation({
    operationId: 'get',
    description: '获取临时素材',
    summary: '获取临时素材',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/90254',
    },
  })
  @ApiQuery({
    name: 'media_id',
    required: true,
    type: 'string',
    description: '媒体文件id',
  })
  public get() {
    return null;
  }
}
