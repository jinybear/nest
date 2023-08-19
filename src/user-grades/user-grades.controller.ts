import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserGradesService } from './user-grades.service';
import { CreateUserGradeDto } from './dto/create-user-grade.dto';
import { UpdateUserGradeDto } from './dto/update-user-grade.dto';

@Controller('user-grades')
export class UserGradesController {
  constructor(private readonly userGradesService: UserGradesService) {}

  @Post()
  create(@Body() createUserGradeDto: CreateUserGradeDto) {
    return this.userGradesService.create(createUserGradeDto);
  }

  @Get()
  findAll() {
    return this.userGradesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userGradesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserGradeDto: UpdateUserGradeDto,
  ) {
    return this.userGradesService.update(+id, updateUserGradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userGradesService.remove(+id);
  }
}
