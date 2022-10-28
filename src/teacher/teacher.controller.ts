import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('teacher')
export class TeacherController {
  constructor(private prisma: PrismaService) {}
  @Get(':id')
  getById(@Param() id: string) {
    return {
      id,
    };
  }
}
