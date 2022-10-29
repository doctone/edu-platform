import { IsEmail, IsNotEmpty } from 'class-validator';

export class AddTeacherDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
