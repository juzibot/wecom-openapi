import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateContactWayDto } from './create-contact-way-dto';
import { CreateContactWayResponse } from './create-contact-way-response';

@ApiTags('externalcontact')
@Controller('externalcontact')
export class ContactWayController {
  @Post('/add_contact_way')
  @ApiOperation({
    operationId: 'addContactWay',
    summary: '通过API添加「联系我」',
    description: '通过API添加的「联系我」',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92572',
    },
  })
  @ApiBody({ type: CreateContactWayDto, required: true })
  @ApiOkResponse({ type: CreateContactWayResponse })
  public add_contact_way() {
    return null;
  }
}
