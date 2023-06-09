import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remarks } from './entities/remarks.entity';
import { RemarksRepositoryService } from './remarks.repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([Remarks])],
  providers: [RemarksRepositoryService],
  exports: [RemarksRepositoryService],
})
export class RemarksRepositoryModule {}
