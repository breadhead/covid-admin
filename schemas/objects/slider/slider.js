import {
  MdCasino,
  MdViewCarousel,
  MdChromeReaderMode,
  MdEmail,
  MdArtTrack,
  MdPhone,
} from 'react-icons/md';

const sliderTypes = [
  {
    title: 'Горизонтальная',
    value: 'horizontal',
  },
  {
    title: 'Вертикальная',
    value: 'vertical',
  },
];

export const slider = {
  name: 'slider',
  title: 'Галерея',
  icon: MdViewCarousel,
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Выберете тип галереи',
      type: 'string',
      options: {
        list: sliderTypes,
      },
    },
    {
      name: 'isFullsreen',
      title: 'Фулскрин по клику',
      type: 'boolean',
    },
    {
      name: 'slider',
      type: 'array',
      title: 'Галерея',
      of: [{ type: 'slide' }],
    },
  ],
  initialValue: {
    isFullsreen: true,
  },
  preview: {
    select: {
      type: 'type',
    },
    prepare(selection) {
      const { type } = selection;

      const formattedType = sliderTypes
        .find(it => it.value === type)
        ?.title?.toLowerCase();

      return {
        title: `Галерея ${formattedType ? formattedType : null}`,
      };
    },
  },
};
