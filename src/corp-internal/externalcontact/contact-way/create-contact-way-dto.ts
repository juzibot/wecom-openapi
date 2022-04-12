import { OmitType } from '@nestjs/swagger';
import { ContactWay } from './contact-way';

export class CreateContactWayDto extends OmitType(ContactWay, [
  'config_id',
] as const) {}
