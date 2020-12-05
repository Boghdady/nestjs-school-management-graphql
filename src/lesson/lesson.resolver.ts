import { Query, Resolver } from '@nestjs/graphql';

import { LessonType } from './lesson.type';

// The type of resolver
@Resolver((of) => LessonType)
export class LessonResolver {
  /*
    In our resolver we will define our queries and mutations.
    query: Retrieve data
    mutation: create, update and delete data
  */

  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '122',
      name: 'Phiscs class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
