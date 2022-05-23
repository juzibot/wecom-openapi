import { Module } from '@nestjs/common';
import { JsapiTicketController } from './jsapi_ticket.controller';

@Module({
  controllers: [JsapiTicketController],
})
export class JsapiTicketModule {}
