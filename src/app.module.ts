import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
