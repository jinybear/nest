import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [        
    ConfigModule.forRoot({ isGlobal: true })
    , TypeOrmModule.forRootAsync(typeORMConfig)      
    , UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
