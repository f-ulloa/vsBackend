import { Module } from '@nestjs/common';
import { CommentRepositoryService } from './comments.reposirtory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsSchema, CommentsSchemaClass } from './schemas/comments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommentsSchemaClass.name, schema: CommentsSchema },
    ]),
  ],
  providers: [CommentRepositoryService],
  exports: [
    CommentRepositoryService,
    MongooseModule.forFeature([
      { name: CommentsSchemaClass.name, schema: CommentsSchema },
    ]),
  ],
})
export class CommentsRepositoryModule {}
