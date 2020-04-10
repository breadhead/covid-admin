import { FiFileText } from 'react-icons/fi';
import { ArticleCategory } from '../types/ArticleCategory';

const article = {
  name: 'article',
  title: 'Статья',
  icon: FiFileText,
  type: 'document',
  fields: [
    {
      name: 'status',
      title: 'Активный',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Дата публикации',
      type: 'date',
      options: { dateFormat: 'DD.MM.YYYY' },
    },
    {
      name: 'pin',
      title: 'Выделить как самое важное',
      type: 'boolean',
    },
    {
      name: 'webinarDate',
      title: 'Дата и время вебинара',
      type: 'date',
      options: { dateFormat: 'DD.MM.YYYY' },
    },
    {
      name: 'categories',
      title: 'Категории',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {
                value: ArticleCategory.ClinicalRecommends,
                title: 'Клинические рекомендации',
              },
              { value: ArticleCategory.Article, title: 'Статьи' },
              { value: ArticleCategory.Webinar, title: 'Вебинары' },
            ],
          },
        },
      ],
    },
    {
      name: 'name',
      title: 'Заголовок',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      name: 'code',
      title: 'url-код',
      type: 'slug',
      description: 'После заполнения поля "Заголовок" нажмите "Generate"',
      options: {
        source: doc => doc.name || '',
        maxLength: 250,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Контент',
      type: 'bodyPortableText',
    },
    {
      name: 'image',
      title: 'Фото',
      type: 'image',
    },
    {
      name: 'sortIndex',
      title: 'Индекс сортировки',
      type: 'number',
      validation: Rule => [Rule.required(), Rule.positive()],
    },
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
  ],
  initialValue: {
    sortIndex: 500,
    status: true,
    categories: [ArticleCategory.Article],
    pin: false,
  },
  preview: {
    select: {
      title: 'name',
      id: '_id',
      status: 'status',
    },
    prepare(selection) {
      const { title, id, status } = selection;
      return {
        title: title,
        subtitle: `${status === true ? 'Active' : 'Disabled'} - ${id}`,
      };
    },
  },
  orderings: [
    {
      title: 'Имя',
      name: 'name',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Сортировка',
      name: 'sort',
      by: [{ field: 'sortIndex', direction: 'asc' }],
    },
  ],
};

export default article;
