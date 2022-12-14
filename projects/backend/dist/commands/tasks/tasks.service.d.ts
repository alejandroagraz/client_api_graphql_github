import { ArticlesRepository } from '../../articles/repositories/article.repository';
export declare class TasksService {
    private readonly articlesRepository;
    constructor(articlesRepository: ArticlesRepository);
    handleCron(): void;
}
