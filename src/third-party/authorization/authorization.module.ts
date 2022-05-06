import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { TokenController } from './token/token.controller';
import { UserController } from './user.controller';

@Module({
  controllers: [TokenController, AuthorizationController, UserController],
})
export class AuthorizationModule {}
