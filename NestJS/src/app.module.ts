import { Module } from '@nestjs/common';
import { CommentsModule } from './Integration/integration.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remarks } from './Integration/repository/remarks/entities/remarks.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.example' }),
    CommentsModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_DB_URL,
      entities: [Remarks],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
