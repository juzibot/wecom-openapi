import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';
import { Department } from './department';

export class GetDepartmentResponse extends Response {
  @ApiProperty({ type: Department })
  department: Department;
}
