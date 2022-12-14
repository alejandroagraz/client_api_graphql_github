"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesProviders = void 0;
const articles_schema_1 = require("./schemas/articles.schema");
exports.articlesProviders = [
    {
        provide: 'DATA_MODEL',
        useFactory: (connection) => connection.model('articles', articles_schema_1.ArticleSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=articles.providers.js.map