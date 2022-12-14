import * as mongoose from 'mongoose';
export declare const ArticleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    deleted: number;
    story_title?: string;
    title?: string;
    story_url?: string;
    author?: string;
    created_at?: Date;
}>;
