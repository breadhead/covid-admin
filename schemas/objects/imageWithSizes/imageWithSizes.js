import { IoIosImage } from 'react-icons/io';
import { imageSizes } from '../../../helpers/imageSizes';
import { ImagePreview } from './ImagePreview';

export const imageWithSizes = {
  name: 'imageWithSizes',
  title: 'Картинка',
  icon: IoIosImage,
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Картинка',
    },
    {
      name: 'size',
      type: 'string',
      options: {
        list: imageSizes,
      },
      title: 'Размер',
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
      size: 'size',
    },
    component: ImagePreview,
  },
};
