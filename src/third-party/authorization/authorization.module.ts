import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { TokenController } from './token/token.controller';

@Module({
  controllers: [TokenController, AuthorizationController],
})
export class AuthorizationModule {}
