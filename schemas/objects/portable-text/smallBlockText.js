import { linkOptions } from '../../../helpers/linkOptions';

export const smallBlockText = {
  name: 'smallBlockText',
  type: 'array',
  title: 'Small block text',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{ title: 'Текст', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Itallic', value: 'em' },
        ],
        annotations: [
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
        ],
      },
    },
  ],
};
