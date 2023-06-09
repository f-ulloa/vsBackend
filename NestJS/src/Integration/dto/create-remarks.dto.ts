import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRemarksDto {
  @IsNumber()
  @IsNotEmpty()
  postId: number;

  @IsNumber()
  @IsNotEmpty()
  remarksId: number;

  @IsString()
  namePost: string;

  @IsEmail()
  email: string;

  @IsString()
  description: string;

  @IsString()
  name_backend: string;
}
