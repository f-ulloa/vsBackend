import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { CreateRemarksDto } from './dto/create-remarks.dto';
import { validateComment } from './validators/comment.validator';
import { formatValidatorErrors } from './utils/error-validator.formatter';

@Controller('api/v1/')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}

  @Post('/:locale/comments')
  async createManyComments(
    @Body() { comments }: any,
    @Param('locale') locale: string,
  ) {
    if (!comments) throw new BadRequestException('Comments is undefined');
    if (!locale) throw new BadRequestException('Locale is undefined');

    const validateErrors = await validateComment(locale, comments);
    const formatedError = formatValidatorErrors(validateErrors);

    if (formatedError.length > 0) {
      throw new BadRequestException({
        message: 'Validation failed',
        errors: formatedError,
      });
    }

    const createdComments = await this.integrationService.createManyComments(
      comments,
    );

    return createdComments;
  }

  @Get('/comments')
  findAllComments() {
    return this.integrationService.findAllComments();
  }

  @Patch('/comments')
  updateAllComments(@Body() toUpdate: { [key: string]: any }) {
    return this.integrationService.updateAllComments(toUpdate);
  }

  @Post('/remarks')
  createManyRemarks(@Body('remarks') remarksData: CreateRemarksDto[]) {
    return this.integrationService.createManyRemarks(remarksData);
  }

  @Get('/remarks')
  findAllRemarks() {
    return this.integrationService.findAllRemarks();
  }
}
