import { MdInsertLink } from 'react-icons/md';

export const resource = {
  name: 'resource',
  title: 'Оф. ресурс для врачей',
  icon: MdInsertLink,
  type: 'document',
  fields: [
    {
      name: 'status',
      title: 'Активный',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'sortIndex',
      title: 'Индекс сортировки',
      type: 'number',
      validation: Rule => [Rule.required(), Rule.positive()],
    },
    {
      name: 'name',
      title: 'Название',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      name: 'url',
      title: 'Ссылка на сайт',
      validation: Rule => Rule.required(),
      type: 'url',
      options: {
        uri: { allowRelative: false },
      },
    },
    {
      name: 'logo',
      title: 'Логотип',
      type: 'image',
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
      logo: 'logo',
    },
    prepare(selection) {
      const { title, id, status, logo } = selection;
      return {
        media: logo,
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
