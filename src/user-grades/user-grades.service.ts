import { Injectable } from '@nestjs/common';
import { CreateUserGradeDto } from './dto/create-user-grade.dto';
import { UpdateUserGradeDto } from './dto/update-user-grade.dto';

@Injectable()
export class UserGradesService {
  create(createUserGradeDto: CreateUserGradeDto) {
    return 'This action adds a new userGrade';
  }

  findAll() {
    return `This action returns all userGrades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGrade`;
  }

  update(id: number, updateUserGradeDto: UpdateUserGradeDto) {
    return `This action updates a #${id} userGrade`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGrade`;
  }
}
