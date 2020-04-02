import { MdEvent } from 'react-icons/md';

export const link = {
  name: 'link',
  title: 'Сайт',
  icon: MdEvent,
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'Сайт',
      description: '(в формате http://www.sevcableport.ru)',
      type: 'url',
    },
  ],
  preview: {
    select: {
      link: 'link',
    },
    prepare(selection) {
      const { link } = selection;

      return {
        title: `Сайт: ${link}`,
      };
    },
  },
};
