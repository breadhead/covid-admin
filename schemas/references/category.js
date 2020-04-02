import { AiOutlineTag } from 'react-icons/ai';

export const category = {
  name: 'category',
  title: 'Категория',
  icon: AiOutlineTag,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'code',
      title: 'url-код',
      type: 'slug',
      description: 'После заполнения поля "Название" нажмите "Generate"',
      options: {
        source: doc => {
          return doc.name;
        },
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const { name } = selection;

      return {
        title: name,
      };
    },
  },
};
