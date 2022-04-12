import { PickType } from '@nestjs/swagger';
import { ContactWay } from './contact-way';

export class UpdateContactWayDto extends PickType(ContactWay, [
  'config_id',
  'remark',
  'skip_verify',
  'style',
  'state',
  'user',
  'party',
  'expires_in',
  'chat_expires_in',
  'unionid',
  'conclusions',
]) {}
