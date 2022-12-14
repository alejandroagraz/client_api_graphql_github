import { AuthInput } from './inputs/auth.input';
import { AuthType } from './dto/auth-user.dto';
import { User } from '../users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ArticlesRepository } from '../articles/repositories/article.repository';
export declare class AuthsService {
    private readonly usersService;
    private readonly jwtService;
    private readonly articlesRepository;
    constructor(usersService: UsersService, jwtService: JwtService, articlesRepository: ArticlesRepository);
    validateUser(input: AuthInput): Promise<User>;
    login(userDto: User): Promise<AuthType>;
}
