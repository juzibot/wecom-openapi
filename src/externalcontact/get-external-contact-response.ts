import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';
import { ExternalContact } from './external-contact';

export class GetExternalContactResponse extends Response {
  @ApiProperty({ type: ExternalContact, required: false })
  external_contact: ExternalContact;
}
