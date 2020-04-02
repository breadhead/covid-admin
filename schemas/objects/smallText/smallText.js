import { SmallTextPreview } from './SmallTextPreview';
import { MdArtTrack } from 'react-icons/md';

export const smallText = {
  name: 'smallText',
  type: 'document',
  icon: MdArtTrack,
  title: 'Мелкий текст',
  fields: [
    {
      name: 'text',
      title: 'Контент',
      type: 'string',
    },
  ],

  initialValue: {
    blank: true,
  },
  preview: {
    select: {
      text: 'text',
    },
    component: SmallTextPreview,
  },
};
