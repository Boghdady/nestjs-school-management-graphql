import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonRepository } from 'src/lesson/lesson.repository';

import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([LessonRepository])],
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
