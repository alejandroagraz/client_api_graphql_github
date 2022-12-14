import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthsResolver } from './auths.resolver';
import { AuthsService } from './auths.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from '../users/users.providers';
import { JwtStrategy } from './strategies/jwt.strategy';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    PassportModule,
    HttpModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: '7200s' },
    }),
  ],
  providers: [
    AuthsResolver,
    JwtStrategy,
    AuthsService,
    UsersService,
    ...usersProviders,
  ],
  exports: [AuthsService],
})
export class AuthsModule {}
