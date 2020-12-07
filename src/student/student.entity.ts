import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Student {
  // Default mongo id
  @ObjectIdColumn()
  _id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
