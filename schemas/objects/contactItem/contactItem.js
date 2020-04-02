import { MdEvent } from 'react-icons/md';
import { linkOptions } from '../../../helpers/linkOptions';

export const contactItem = {
  name: 'contactItem',
  title: 'Ссылка',
  icon: MdEvent,
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Ссылка',
      description: '(в формате http://www.sevcableport.ru)',
      type: 'url',
    },
    {
      name: 'options',
      title: 'Тип ссылки',
      type: 'string',
      options: {
        list: linkOptions,
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const { name } = selection;

      return {
        title: name.ru,
      };
    },
  },
};
