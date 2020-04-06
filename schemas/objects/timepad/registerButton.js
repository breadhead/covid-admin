import { IoIosRadioButtonOff } from 'react-icons/all';

export const registerButton = {
  name: 'registerButton',
  title: 'Кнопка регистрации на вебинар',
  icon: IoIosRadioButtonOff,
  type: 'document',
  fields: [
    {
      name: 'webinarId',
      title: 'ID вебинара (из timepad)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Подпись кнопки',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare(selection) {
      const { text } = selection;

      return {
        title: text,
      };
    },
  },
};
