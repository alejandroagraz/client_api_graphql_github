"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const create_article_dto_1 = require("./dto/create-article.dto");
const jwt_auth_guard_1 = require("../auths/guards/jwt-auth.guard");
const remove_input_1 = require("./inputs/remove.input");
const graphql_2 = require("graphql");
let ArticleResolver = class ArticleResolver {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    async getArticle() {
        return this.articlesService.find({ deleted: 0 });
    }
    async removeArticle(input) {
        const { _id } = input;
        const deleted = await this.articlesService.findByIdAndUpdate(_id, {
            deleted: 1,
        });
        if (deleted) {
            return this.articlesService.find({ deleted: 0 });
        }
        else {
            throw new graphql_2.GraphQLError('Deleted article failed!');
        }
    }
};
__decorate([
    (0, graphql_1.Query)(() => [create_article_dto_1.ArticleType]),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "getArticle", null);
__decorate([
    (0, graphql_1.Mutation)(() => [create_article_dto_1.ArticleType]),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remove_input_1.RemoveInput]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "removeArticle", null);
ArticleResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticleResolver);
exports.ArticleResolver = ArticleResolver;
//# sourceMappingURL=article.resolver.js.map