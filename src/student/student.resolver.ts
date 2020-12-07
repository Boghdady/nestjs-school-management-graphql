import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query(() => StudentType)
  async student(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }

  @Query(() => [StudentType])
  async students(): Promise<Student[]> {
    return this.studentService.getStudents();
  }
}
