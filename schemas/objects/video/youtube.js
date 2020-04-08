import { IoIosRadioButtonOn } from 'react-icons/io';
import { YoutubePreview } from './YoutubePreview.jsx';

export const youtube = {
  name: 'youtube',
  title: 'Youtube видео',
  icon: IoIosRadioButtonOn,
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Ссылка',
      type: 'url',
    },
    {
      name: 'text',
      type: 'smallBlockText',
      title: 'Подпись',
    },
  ],
  preview: {
    select: {
      title: 'url',
    },
    component: YoutubePreview,
  },
};
