import article from './article';

import {NewsCategory} from "../types/NewsCategory";
import {ArticleCategory} from "../types/ArticleCategory";

const news = Object.assign({}, article);

news.name = 'news';
news.title = 'Новости';
news.fields = news.fields.map(field => {
    if (field.name === 'categories') {
        field.of[0].options.list = [
            {value: NewsCategory.News, title: 'Новости'},
            {value: NewsCategory.Help, title: 'Помощь больницам'},
            {value: NewsCategory.Report, title: 'Отчеты'},
        ];
    }

    return field;
});

news.fields.push(
    {
        name: 'tags',
        title: 'Теги',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [{ type: 'tag' }],
                weak: true,
            },
        ],
    },
)
news.initialValue.categories = [NewsCategory.News];

export default news;
