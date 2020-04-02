import { IoIosRadioButtonOn } from 'react-icons/io';
import { annotations } from './annotations';

export const portableTextElements = [
  { title: 'Текст', value: 'normal' },
  { title: 'Заголовок H2', value: 'h2' },
  { title: 'Заголовок H3', value: 'h3' },
  { title: 'Заголовок H4', value: 'h4' },
  { title: 'Крупный текст', value: 'blockquote' },
];

export const bodyPortableText = {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: portableTextElements,
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Itallic', value: 'em' },
        ],
        annotations: annotations,
      },
    },
    {
      type: 'imageWithSizes',
      title: 'Картинка',
    },
    {
      type: 'smallText',
      title: 'мелкий текст',
    },
    {
      type: 'actionButton',
      icon: IoIosRadioButtonOn,
      title: 'Кнопка',
    },
  ],
};
