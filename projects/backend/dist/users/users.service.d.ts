import { Model, FilterQuery } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserInput } from './inputs/user.input';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: UserInput): Promise<User>;
    find(query: FilterQuery<User>): Promise<User[]>;
    findAll(): Promise<User[]>;
    findOne(query: FilterQuery<User>): Promise<User>;
}
