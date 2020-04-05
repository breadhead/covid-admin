import article from './article';

import { NewsCategory } from '../types/NewsCategory';

const news = Object.assign({}, article);

news.name = 'news';
news.title = 'Новости';
news.fields = news.fields.map(field => {
  if (field.name === 'categories') {
      return {
          name: 'categories',
              title: 'Категории',
              type: 'array',
              of: [
              {
                  type: 'string',
                  options: {
                      list: [
                          { value: NewsCategory.News, title: 'Новости' },
                          { value: NewsCategory.Help, title: 'Помощь больницам' },
                          { value: NewsCategory.Report, title: 'Отчеты' },
                      ],
                  },
              },
          ],
      }
  }

  return field;
});

news.fields.unshift({
    title: 'Показывать на главной',
    name: 'showOnMain',
    type: 'boolean',
});

const initials = Object.assign({}, news.initialValue);
initials.categories = [NewsCategory.News];
initials.showOnMain = true;

news.initialValue = initials;

export default news;
