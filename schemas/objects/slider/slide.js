import { FiSliders } from 'react-icons/fi';

export const slide = {
  name: 'slide',
  title: 'Слайд',
  icon: FiSliders,
  type: 'object',
  fields: [
    {
      name: 'alt',
      title: 'Альтернативный текст (описание проиходящего на картинке)',
      description:
        'Текст, который будет слышно через скринридер и видно, если не загрузится картинка',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Фото',
      description: 'Фотография 944 x 532',
      type: 'image',
    },
  ],
};
