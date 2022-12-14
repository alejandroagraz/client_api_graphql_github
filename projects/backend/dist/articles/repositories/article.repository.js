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
exports.ArticlesRepository = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let ArticlesRepository = class ArticlesRepository {
    constructor(articleModel, httpService) {
        this.articleModel = articleModel;
        this.httpService = httpService;
    }
    async generateDataApi() {
        const response = await this.getDataApi();
        const dataDto = response.map(function (resp) {
            const createDto = {
                story_title: resp.story_title,
                title: resp.title,
                story_url: resp.story_url,
                author: resp.author,
                created_at: resp.created_at,
            };
            return createDto;
        });
        for (const data of dataDto) {
            const resp = await this.articleModel
                .find({
                $and: [
                    { story_title: data.story_title },
                    { title: data.title },
                    { story_url: data.story_url },
                    { author: data.author },
                ],
            })
                .exec();
            if (resp.length == 0) {
                const createdData = new this.articleModel(data);
                await createdData.save();
            }
        }
    }
    async getDataApi() {
        return this.httpService
            .get(process.env.API_EXT)
            .toPromise()
            .then((res) => res.data.hits);
    }
    async isData() {
        return this.articleModel.count();
    }
};
ArticlesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATA_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        axios_1.HttpService])
], ArticlesRepository);
exports.ArticlesRepository = ArticlesRepository;
//# sourceMappingURL=article.repository.js.map