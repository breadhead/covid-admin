import { IoIosImage } from 'react-icons/io';
import { ImagePreview } from './ImagePreview';

export const customImage = {
  name: 'customImage',
  title: 'Изображение',
  icon: IoIosImage,
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
    },
    {
      name: 'text',
      type: 'smallBlockText',
      title: 'Подпись',
    },

    {
      name: 'isFullsreen',
      title: 'Фулскрин по клику',
      type: 'boolean',
    },
  ],
  initialValue: {
    isFullsreen: true,
  },
  preview: {
    select: {
      image: 'image',
    },
    component: ImagePreview,
  },
};
