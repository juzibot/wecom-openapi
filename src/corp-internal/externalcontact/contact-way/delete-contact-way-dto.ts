import { PickType } from '@nestjs/swagger';
import { ContactWay } from './contact-way';

export class DeleteContactWayDto extends PickType(ContactWay, ['config_id']) {}
