import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  validate,
} from 'class-validator';

export class CreateCommentDto {
  @IsNumber({}, { message: 'postId must be a number' })
  @IsNotEmpty({ message: 'postId must not be empty' })
  postId: number;

  @IsNumber({}, { message: 'id must be a number' })
  @IsNotEmpty({ message: 'id must not be empty' })
  id: number;

  @IsString({ message: 'name must be a string' })
  name: string;

  @IsNotEmpty()
  email: string;

  @IsString({ message: 'body must be a string' })
  body: string;

  @IsString({ message: 'name_backend must be a string' })
  name_backend: string;
}

export class JapanCreateCommentDto extends CreateCommentDto {
  @Matches(/a/, {
    message: 'must be a valid email',
  })
  email: string;
}
