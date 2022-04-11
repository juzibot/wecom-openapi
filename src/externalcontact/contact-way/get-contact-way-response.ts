import { Response } from '../../response';
import { ContactWay } from './contact-way';

export class GetContactWayResponse extends Response {
  contact_way: ContactWay;
}
