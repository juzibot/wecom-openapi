import { OmitType } from '@nestjs/swagger';
import { ContactWay } from './contact-way';

export class AddContactWayDto extends OmitType(ContactWay, [
  'config_id',
  'qr_code',
] as const) {}
