import { TiDocumentText } from 'react-icons/ti';

export const accordionItem = {
  name: 'accordionItem',
  title: 'Элемент аккордеона',
  icon: TiDocumentText,
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Текст',
      type: 'bodyPortableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      console.log('title:', title);
      return {
        title: title.ru,
      };
    },
  },
};
