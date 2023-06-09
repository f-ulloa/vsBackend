import { Injectable } from '@nestjs/common';
import {
  CommentsDocument,
  CommentsSchemaClass,
} from './schemas/comments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from 'src/Integration/dto/create-comment.dto';

@Injectable()
export class CommentRepositoryService {
  constructor(
    @InjectModel(CommentsSchemaClass.name)
    private CommentModel: Model<CommentsDocument>,
  ) {}

  insertMany(comments: CreateCommentDto[]) {
    return this.CommentModel.insertMany(comments);
  }

  findAll() {
    return this.CommentModel.find().exec();
  }

  async updateMany(toUpdate: { [key: string]: any }) {
    const VALUE_TO_UPDATE = { $set: toUpdate };
    return this.CommentModel.updateMany({}, VALUE_TO_UPDATE);
  }
}
