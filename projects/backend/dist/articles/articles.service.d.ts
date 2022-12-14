import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Article } from './interfaces/article.interface';
export declare class ArticlesService {
    private readonly articleModel;
    constructor(articleModel: Model<Article>);
    find(query: FilterQuery<Article>): Promise<Article[]>;
    findByIdAndUpdate(_id: string, query: UpdateQuery<Article>): Promise<Article>;
}
