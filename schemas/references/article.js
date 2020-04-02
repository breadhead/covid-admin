import { FiFileText } from 'react-icons/fi';

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
      name: 'categories',
      title: 'Категории',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'sortIndex',
      title: 'Индекс сортировки',
      type: 'number',
      validation: Rule => [Rule.required(), Rule.positive()],
    },
    {
      name: 'name',
      title: 'Имя',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'code',
      title: 'url-код',
      type: 'slug',
      description: 'После заполнения поля "Имя" нажмите "Generate"',
      options: {
        source: doc => doc.name || '',
        maxLength: 250,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'bodyPortableText',
    },
  ],
  initialValue: {
    sortIndex: 500,
    status: true,
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
