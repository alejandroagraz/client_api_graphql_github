import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}>;
