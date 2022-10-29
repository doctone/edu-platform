import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherRepository } from './teacher.repository';

@Module({
  providers: [TeacherRepository],
  controllers: [TeacherController],
})
export class TeacherModule {}
