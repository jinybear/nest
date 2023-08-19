import { PartialType } from '@nestjs/mapped-types';
import { CreateUserGradeDto } from './create-user-grade.dto';

export class UpdateUserGradeDto extends PartialType(CreateUserGradeDto) {}
