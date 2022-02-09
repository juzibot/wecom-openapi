import { Module } from '@nestjs/common';
import { DepartmentController } from './wecom/department/department.controller';

@Module({
  imports: [],
  controllers: [DepartmentController],
  providers: [],
})
export class AppModule {}
