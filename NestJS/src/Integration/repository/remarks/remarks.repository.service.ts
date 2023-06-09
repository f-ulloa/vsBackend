import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Remarks } from './entities/remarks.entity';
import { CreateRemarksDto } from 'src/Integration/dto/create-remarks.dto';

@Injectable()
export class RemarksRepositoryService {
  constructor(
    @InjectRepository(Remarks)
    private readonly remarksRepository: Repository<Remarks>,
  ) {}

  insertMany(remarksData: CreateRemarksDto[]) {
    return this.remarksRepository
      .createQueryBuilder()
      .insert()
      .into(Remarks)
      .values(remarksData)
      .execute();
  }

  findAll() {
    return this.remarksRepository.find();
  }
}
