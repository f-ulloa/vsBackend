import { validate } from 'class-validator';
import {
  CreateCommentDto,
  JapanCreateCommentDto,
} from '../dto/create-comment.dto';
import { BadRequestException } from '@nestjs/common';

export async function validateComment(
  locale: string,
  comments: CreateCommentDto[],
) {
  try {
    switch (locale) {
      case 'jp':
        return Promise.all(
          comments.map((comment: JapanCreateCommentDto) =>
            validate(Object.assign(new JapanCreateCommentDto(), comment)),
          ),
        );
      default:
        return await Promise.all(
          comments.map((comment: CreateCommentDto) =>
            validate(Object.assign(new CreateCommentDto(), comment)),
          ),
        );
    }
  } catch (e) {
    throw new BadRequestException('Error during comment validation.');
  }
}
