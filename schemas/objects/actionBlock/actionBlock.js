import { FaFireAlt } from 'react-icons/fa';

export const actionBlock = {
  name: 'actionBlock',
  title: 'Action block',
  icon: FaFireAlt,
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Текст',
      type: 'smallBlockText',
    },
    {
      name: 'button',
      title: 'Кнопка',
      type: 'actionButton',
    },
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare(selection) {
      const { text } = selection;

      return {
        title: text.ru,
      };
    },
  },
};
