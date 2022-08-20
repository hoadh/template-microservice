import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([{
      name: 'kafka-client',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'template-service',
          brokers: ['localhost: 9091', 'localhost: 9092', 'localhost: 9093']
        },
        consumer: {
          groupId: 'template-consumer-group',
        }
      }
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
