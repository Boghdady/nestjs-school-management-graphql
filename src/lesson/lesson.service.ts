import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Lesson } from './lesson.entity';
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

  async createLesson(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<Lesson> {
    // const { name, startDate, endDate } = createLessonDto;
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });
    // Save to lesson document to mongodb
    return this.lessonRepository.save(lesson);
  }
}
