import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { validationSchema } from './config/validationSchema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGradesModule } from './user-grades/user-grades.module';
import { TypeOrmConfigService } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      cache: true,
      isGlobal: true,
      validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UsersModule,
    UserGradesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
