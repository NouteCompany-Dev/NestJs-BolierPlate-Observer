import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT),
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   autoLoadEntities: true,
    //   synchronize: false
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
