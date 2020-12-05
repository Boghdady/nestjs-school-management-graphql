import { Field, ID, ObjectType } from '@nestjs/graphql';

// We will use this type in our Resolver
@ObjectType('Lesson')
export class LessonType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
