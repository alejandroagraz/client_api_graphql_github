import { Injectable, Inject } from '@nestjs/common';
import { AuthInput } from './inputs/auth.input';
import { AuthType } from './dto/auth-user.dto';
import { User } from '../users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthsService {
  constructor(
    @Inject('USER_MODEL')
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(input: AuthInput): Promise<User> {
    const { username, password } = input;
    const isUSer = await this.usersService.findOne({
      $or: [{ email: username }, { username }],
    });
    if (isUSer) {
      const verifyPassword = await bcrypt.compare(password, isUSer.password);
      if (verifyPassword) {
        return isUSer;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  async login(userDto: User): Promise<AuthType> {
    const authType = new AuthType();
    const payload = {
      sub: userDto._id,
      username: userDto.username,
      email: userDto.email,
    };

    authType.access_token = this.jwtService.sign(payload);
    return authType;
  }
}
