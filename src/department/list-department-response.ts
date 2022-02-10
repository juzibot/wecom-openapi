import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';
import { Department } from './department';

export class ListDepartmentResponse extends Response {
  @ApiProperty({ type: Department, isArray: true, required: false })
  department: Department[];
}
