import { ArticlesService } from './articles.service';
import { RemoveInput } from './inputs/remove.input';
export declare class ArticleResolver {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    getArticle(): Promise<import("./interfaces/article.interface").Article[]>;
    removeArticle(input: RemoveInput): Promise<import("./interfaces/article.interface").Article[]>;
}
