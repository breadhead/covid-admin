import { SmallTextPreview } from './SmallTextPreview';
import { MdArtTrack } from 'react-icons/md';

export const smallText = {
  name: 'smallText',
  type: 'object',
  icon: MdArtTrack,
  title: 'Мелкий текст',
  fields: [
    {
      name: 'text',
      title: 'Контент',
      type: 'string',
    },
  ],

  preview: {
    select: {
      text: 'text',
    },
    component: SmallTextPreview,
  },
};
