import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => StudentType)
  createStudent(): Promise<Student> {
    return this.studentService.createStudent();
  }

  @Query(() => StudentType)
  student(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }

  @Query(() => [StudentType])
  students(): Promise<Student[]> {
    return this.studentService.getStudents();
  }
}
