"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const axios_1 = require("@nestjs/axios");
const articles_module_1 = require("../../articles/articles.module");
const article_repository_1 = require("../../articles/repositories/article.repository");
const articles_providers_1 = require("../../articles/articles.providers");
const database_module_1 = require("../../database/database.module");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [articles_module_1.ArticleModule, axios_1.HttpModule, database_module_1.DatabaseModule],
        providers: [tasks_service_1.TasksService, article_repository_1.ArticlesRepository, ...articles_providers_1.articlesProviders],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map