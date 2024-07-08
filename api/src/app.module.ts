import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './datasource/typeorm.module';

console.log(typeof process.env.DB_PASSWORD); // Should output 'string'

@Module({
  imports: [TodosModule, ConfigModule.forRoot(), TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
