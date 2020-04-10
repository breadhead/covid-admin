import { IoMdPaper } from 'react-icons/all';

export const registerForm = {
  name: 'registerForm',
  title: 'Форма',
  icon: IoMdPaper,
  type: 'document',
  fields: [
    {
      name: 'webinarName',
      title: 'Название мероприятия',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Дата начала',
      type: 'datetime',
    },
    {
      name: 'webinarLink',
      title: 'Ссылка на вебинар',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'webinarName',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: `Форма регистрации на: ${title}`,
      };
    },
  },
};
