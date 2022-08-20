import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject("kafka-client") private readonly client: ClientKafka) { }

  async onModuleInit() {
    ['template.topic'].forEach((key) => this.client.subscribeToResponseOf(`${key}`));
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  getHello(): string {
    return 'Hello World!';
  }

  send_message() {
    return this.client.emit('template.topic', {foo:'bar', data: new Date().toString()})
  }

}