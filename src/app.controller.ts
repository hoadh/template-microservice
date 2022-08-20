import { Controller, Get } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("health-check")
  get_health() {
    return {
      status: "ok"
    }
  }
  
  @MessagePattern('template.topic')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response = `Receiving a new message from topic: template.topic: ` + JSON.stringify(originalMessage.value);
    console.log(response);
    console.log(message);
    return response;
  }

  @Get("test-new-message")
  send_message() {
    this.appService.send_message();
  }

}
