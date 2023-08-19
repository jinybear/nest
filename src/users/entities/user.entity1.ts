import { UserGrade } from 'src/user-grades/entities/user-grade.entity1';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  refreshtoken: string;

  @Column({ nullable: false, default: false })
  islocked: boolean;

  @Column({ nullable: false, default: 0 })
  failcount: number;

  @OneToOne(() => UserGrade)
  @JoinColumn()
  authority: UserGrade;
}
