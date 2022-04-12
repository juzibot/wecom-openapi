import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
import { Department } from './department';

export class SimpleListDepartmentResponse extends Response {
  @ApiProperty({ type: Department, isArray: true })
  department_id: Department[];
}
