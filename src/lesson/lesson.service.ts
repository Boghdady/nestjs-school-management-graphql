import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: LessonRepository,
  ) {}

  async getLesson(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne(id);
    return lesson;
  }

  async getLessons(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
      students,
    });
    // Save to lesson document to mongodb
    return this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    const { lessonId, studentsIds } = assignStudentsToLessonInput;
    const lesson = await this.lessonRepository.findOne({ _id: lessonId });
    lesson.students = [...lesson.students, ...studentsIds];

    return this.lessonRepository.save(lesson);
  }
}
