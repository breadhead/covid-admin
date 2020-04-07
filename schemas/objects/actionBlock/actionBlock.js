import { FaFireAlt } from 'react-icons/fa';

export const actionBlock = {
  name: 'actionBlock',
  title: 'Выделенный блок',
  icon: FaFireAlt,
  type: 'document',
  fields: [
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
      title: 'title',
    },
  },
};
