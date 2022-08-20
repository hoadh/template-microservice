import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject("kafka-client") private readonly client: ClientKafka) { }

  async onModuleInit() {
    [
      'NEW_ORDER',
      'TAKE_ORDER',
      'COMPLETE_ORDER'
    ].forEach((key) => this.client.subscribeToResponseOf(`${key}`));
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  getHello(): string {
    return 'Hello World!';
  }

}