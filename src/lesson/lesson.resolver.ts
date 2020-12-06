import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

/* eslint-disable @typescript-eslint/no-unused-vars */
// The type of resolver
// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}
  /*
    In our resolver we will define our queries and mutations.
    query: Retrieve data
    mutation: create, update and delete data
  */

  @Query(() => LessonType)
  lesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType])
  lessons(): Promise<Lesson[]> {
    return this.lessonService.getLessons();
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }
}
