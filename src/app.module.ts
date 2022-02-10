import { Module } from '@nestjs/common';
import { DepartmentController } from './department/department.controller';
import { TagController } from './tag/tag.controller';

@Module({
  imports: [],
  controllers: [DepartmentController, TagController],
  providers: [],
})
export class AppModule {}
