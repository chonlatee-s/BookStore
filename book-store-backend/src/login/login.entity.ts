import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login')
export class LoginEntity {
  @PrimaryGeneratedColumn()
  loginId: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuid: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
