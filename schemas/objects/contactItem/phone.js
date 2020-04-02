import { MdPhone } from 'react-icons/md';

export const phone = {
  name: 'customPhone',
  title: 'Телефон',
  icon: MdPhone,
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Телефон',
      type: 'string',
    },
  ],
  preview: {
    select: {
      number: 'number',
    },
    prepare(selection) {
      const { number } = selection;

      return {
        title: `Телефон: ${number}`,
      };
    },
  },
};
