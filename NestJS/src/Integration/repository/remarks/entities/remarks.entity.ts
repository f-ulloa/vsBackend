import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Remarks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postId: number;

  @Column()
  remarksId: number;

  @Column()
  namePost: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column()
  name_backend: string;
}
