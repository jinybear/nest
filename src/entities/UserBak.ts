import { Column, Entity, Index } from 'typeorm';

@Index('user_pkey', ['id'], { unique: true })
@Entity('user_bak', { schema: 'public' })
export class UserBak {
  @Column('character varying', { primary: true, name: 'id', length: 36 })
  id: string;

  @Column('character varying', { name: 'password', length: 255 })
  password: string;

  @Column('enum', {
    name: 'authority',
    enum: ['ENGINEER', 'SEMI_ENGINEER', 'ADMIN', 'NORMAL', 'ANYONE'],
    default: () => "'ANYONE'",
  })
  authority: 'ENGINEER' | 'SEMI_ENGINEER' | 'ADMIN' | 'NORMAL' | 'ANYONE';

  @Column('character varying', {
    name: 'refreshtoken',
    nullable: true,
    length: 255,
  })
  refreshtoken: string | null;

  @Column('boolean', { name: 'islocked', default: () => 'false' })
  islocked: boolean;

  @Column('integer', { name: 'failcount', default: () => '0' })
  failcount: number;
}
