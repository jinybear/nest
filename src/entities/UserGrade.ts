import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('user_grade', { schema: 'public' })
export class UserGrade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'type' })
  type: string;

  @OneToOne(() => User, (user) => user.authority)
  user: User;
}
