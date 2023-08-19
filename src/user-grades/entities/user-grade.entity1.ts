import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserGrade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  type: string;
}
