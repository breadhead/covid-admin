import { TiThMenuOutline } from 'react-icons/ti';

const typesList = [
  { title: 'Аккордеон', value: 'accordion' },
  { title: 'Раскрывашка', value: 'group' },
];

export const accordion = {
  name: 'accordion',
  title: 'Аккордеон',
  icon: TiThMenuOutline,
  type: 'document',
  fields: [
    {
      name: 'type',
      type: 'string',
      options: {
        list: typesList,
      },
    },
    {
      name: 'items',
      title: ' ',
      type: 'array',
      of: [{ type: 'accordionItem' }],
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare(selection) {
      const { type } = selection;

      const title =
        typesList.find(it => it.value === type)['title'] ||
        typesList[0]['title'];

      return {
        title,
      };
    },
  },
  initialValue: {
    status: true,
  },
};
