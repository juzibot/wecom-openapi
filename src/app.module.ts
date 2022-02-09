import { Module } from '@nestjs/common';
import { DepartmentController } from './wecom/department/department.controller';
import { TagController } from './wecom/tag/tag.controller';

@Module({
  imports: [],
  controllers: [DepartmentController, TagController],
  providers: [],
})
export class AppModule {}
