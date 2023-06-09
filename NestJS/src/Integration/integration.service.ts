import { Inject, Injectable } from '@nestjs/common';
import type { CreateRemarksDto } from './dto/create-remarks.dto';
import type { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRepositoryService } from './repository/comments/comments.reposirtory.service';
import { RemarksRepositoryService } from './repository/remarks/remarks.repository.service';

@Injectable()
export class IntegrationService {
  constructor(
    @Inject(CommentRepositoryService)
    private readonly commentRepositoryService: CommentRepositoryService,
    @Inject(RemarksRepositoryService)
    private readonly remarksRepositoryService: RemarksRepositoryService,
  ) {}

  async createManyComments(comments: CreateCommentDto[]) {
    const response = await this.commentRepositoryService.insertMany(comments);
    //TODO: Custom log to the responde
    return response;
  }

  async findAllComments() {
    const response = await this.commentRepositoryService.findAll();
    //TODO: Custom log to the responde
    return response;
  }

  async updateAllComments(toUpdate: { [key: string]: any }) {
    const response = await this.commentRepositoryService.updateMany(toUpdate);
    //TODO: Custom log to the responde
    return response;
  }

  async createManyRemarks(remarksData: CreateRemarksDto[]) {
    const response = await this.remarksRepositoryService.insertMany(
      remarksData,
    );
    //TODO: Custom log to the responde
    return response;
  }

  async findAllRemarks() {
    const response = this.remarksRepositoryService.findAll();
    //TODO: Custom log to the responde
    return response;
  }
}
