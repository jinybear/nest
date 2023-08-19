import { Module } from '@nestjs/common';
import { UserGradesService } from './user-grades.service';
import { UserGradesController } from './user-grades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGrade } from '../entities/UserGrade';

@Module({
  imports: [TypeOrmModule.forFeature([UserGrade])],
  controllers: [UserGradesController],
  providers: [UserGradesService],
})
export class UserGradesModule {}
