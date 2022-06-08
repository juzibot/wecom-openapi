import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { Response } from '../../response';
import { User } from './user';

export class GetUserResponse extends IntersectionType(User, Response) {}
