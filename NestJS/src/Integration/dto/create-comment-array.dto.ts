import { ValidateNested } from 'class-validator';

export class CommentsArrayDto<T> {
  @ValidateNested({ each: true })
  comments: T[];
}
