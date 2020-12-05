/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

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
  getLesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
