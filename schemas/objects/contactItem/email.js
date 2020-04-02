import { MdEmail } from 'react-icons/md';

export const email = {
  name: 'customEmail',
  title: 'Почта',
  icon: MdEmail,
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Почта',
      type: 'string',
    },
  ],
  preview: {
    select: {
      email: 'email',
    },
    prepare(selection) {
      const { email } = selection;

      return {
        title: `Почта: ${email}`,
      };
    },
  },
};
