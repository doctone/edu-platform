import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  signup() {
    return 'I am signed up';
  }

  signin() {
    return 'I am signed in';
  }
}
