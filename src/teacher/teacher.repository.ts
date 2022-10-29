import { PrismaService } from 'src/prisma/prisma.service';

export class TeacherRepository {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.teacher.findMany();
  }

  getById(id: string) {
    return this.prisma.teacher.findUnique({
      where: {
        id,
      },
    });
  }
}
