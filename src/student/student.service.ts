import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: StudentRepository,
  ) {}

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne(id);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    // In this moment student variable hold an object but still not saved to db
    const student = this.studentRepository.create({ firstName, lastName });
    //Save student object to db
    return this.studentRepository.save(student);
  }
}
