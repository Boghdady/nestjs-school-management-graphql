import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Lesson {
  // Default mongo id
  @ObjectIdColumn()
  _id: string;

  // public id created by me
  // @PrimaryColumn()
  // id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
