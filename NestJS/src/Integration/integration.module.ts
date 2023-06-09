import { Module } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { IntegrationController } from './integration.controller';
import { CommentsRepositoryModule } from './repository/comments/comments.repository.module';
import { RemarksRepositoryModule } from './repository/remarks/remarks.repository.module';

@Module({
  imports: [CommentsRepositoryModule, RemarksRepositoryModule],
  controllers: [IntegrationController],
  providers: [IntegrationService],
})
export class CommentsModule {}
