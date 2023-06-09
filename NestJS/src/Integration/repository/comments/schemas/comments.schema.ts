import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentsDocument = HydratedDocument<CommentsSchemaClass>;

@Schema()
export class CommentsSchemaClass {
  @Prop()
  postId: number;

  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  body: string;

  @Prop()
  name_backend: string;
}

export const CommentsSchema = SchemaFactory.createForClass(CommentsSchemaClass);
