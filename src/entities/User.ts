import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserGrade } from './UserGrade';

@Index('UQ_d72ea127f30e21753c9e229891e', ['userId'], { unique: true })
@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'userId', unique: true })
  userId: string;

  @Column('timestamp without time zone', {
    name: 'createdAt',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'updatedAt',
    default: () => 'now()',
  })
  updatedAt: Date;

  @Column('timestamp without time zone', { name: 'deletedAt', nullable: true })
  deletedAt: Date | null;

  @Column('character varying', { name: 'password' })
  password: string;

  @Column('character varying', { name: 'refreshtoken', nullable: true })
  refreshtoken: string | null;

  @Column('boolean', { name: 'islocked', default: () => 'false' })
  islocked: boolean;

  @Column('integer', { name: 'failcount', default: () => '0' })
  failcount: number;

  @OneToOne(() => UserGrade, (userGrade) => userGrade.user)
  @JoinColumn([{ name: 'authorityId', referencedColumnName: 'id' }])
  authority: UserGrade;
}
