import { linkOptions } from '../../../helpers/linkOptions';

export const annotations = [
  {
    name: 'link',
    type: 'object',
    title: 'Ссылка',
    fields: [
      {
        title: 'URL',
        name: 'href',
        type: 'string',
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
  },
];
