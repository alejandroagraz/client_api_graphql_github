import { Model } from 'mongoose';
import { Article } from '../interfaces/article.interface';
import { HttpService } from '@nestjs/axios';
export declare class ArticlesRepository {
    private readonly articleModel;
    private readonly httpService;
    constructor(articleModel: Model<Article>, httpService: HttpService);
    generateDataApi(): Promise<void>;
    getDataApi(): Promise<any>;
    isData(): Promise<number>;
}
