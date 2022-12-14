import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { AuthsModule } from './auths/auths.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    GraphQLModule.forRoot(<ApolloDriverConfig>{
      driver: ApolloDriver,
      autoSchemaFile: './graphql/schema.gql',
      context: ({ req }) => ({ req }),
    }),
    DatabaseModule,
    AuthsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
