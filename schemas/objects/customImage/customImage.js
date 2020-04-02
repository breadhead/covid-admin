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
      type: 'imageDescription',
      title: 'Подпись',
    },

    {
      name: 'isFullsreen',
      title: 'Фулскрин по клику',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      image: 'image',
    },
    component: ImagePreview,
  },
};
