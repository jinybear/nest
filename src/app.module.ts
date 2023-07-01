import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule
    , ConfigModule.forRoot({      
      isGlobal: true    
    })
    , TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DBMS_IP,
        port: Number(process.env.DBMS_PORT),
        username: process.env.DBMS_USERNAME,
        password: process.env.DBMS_PASSWORD,
        database: process.env.DBMS_DATABASE,
        synchronize: false,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
