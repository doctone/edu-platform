import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddTeacherDto } from './AddTeacher.dto';
import { TeacherRepository } from './teacher.repository';

@Controller('teachers')
export class TeacherController {
  constructor(private teacherRepo: TeacherRepository) {}
  @Get(':id')
  getById(@Param() id: string) {
    this.teacherRepo.getById(id);
  }

  @Get()
  getTeachers() {
    return this.teacherRepo.getAll();
  }

  @Post()
  AddTeacher(@Body() dto: AddTeacherDto) {
    return dto;
  }
}
