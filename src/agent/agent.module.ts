import { Module } from '@nestjs/common';
import { AgentController } from './agent.controller';
@Module({
  controllers: [AgentController],
})
export class AgentModule {}
