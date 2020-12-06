import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Student } from './student.entity';
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

  async createStudent(): Promise<Student> {
    const student = this.studentRepository.create();

    return this.studentRepository.save(student);
  }
}
