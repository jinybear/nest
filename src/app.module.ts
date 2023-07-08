import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { typeORMConfig } from './config/typeorm.config';
import { LoggerMiddleware } from './middleware/logger.middleware';


@Module({
  imports: [        
    ConfigModule.forRoot({ isGlobal: true })
    , TypeOrmModule.forRootAsync(typeORMConfig)      
    , UserModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
      //consumer.apply(LoggerMiddleware).forRoutes({path: 'parking/auth/user', method: RequestMethod.GET})
      consumer
        .apply(LoggerMiddleware)
        //.exclude({path: 'parking/auth/user', method: RequestMethod.GET})
        .forRoutes('parking/auth/user')
  }
}
