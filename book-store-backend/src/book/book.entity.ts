import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn()
  bookId: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuid: string;
  @Column()
  name: string;
  @Column()
  price: number;
}
