import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field()
  name: string;
}
