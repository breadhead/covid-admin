import { IoMdPaper } from 'react-icons/all';

export const registerForm = {
  name: 'registerForm',
  title: 'Форма',
  icon: IoMdPaper,
  type: 'document',
  fields: [
    {
      name: 'webinarLink',
      title: 'Ссылка на вебинар',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'webinarLink',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: `Форма регистрации на: ${title}`,
      };
    },
  },
};
