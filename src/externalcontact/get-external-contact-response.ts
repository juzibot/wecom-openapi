import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';
import { ExternalContact, ExternalFollowUser } from './external-contact';

export class GetExternalContactResponse extends Response {
  @ApiProperty({ type: ExternalContact, required: false })
  external_contact: ExternalContact;

  @ApiProperty({ type: ExternalFollowUser, required: false, isArray: true })
  follow_user: ExternalFollowUser[];
}
