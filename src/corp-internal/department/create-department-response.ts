import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class CreateDepartmentResponse extends Response {
  @ApiProperty({ type: 'number', required: true, description: '部门id' })
  id: number;
}
