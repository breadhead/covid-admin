import { actionButtonType } from '../../../helpers/actionButtonType';
import { IoIosRadioButtonOn } from 'react-icons/io';
import { linkOptions } from '../../../helpers/linkOptions';

export const actionButton = {
  name: 'actionButton',
  title: 'Кнопка',
  icon: IoIosRadioButtonOn,
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Тип',
      type: 'string',
      options: {
        list: actionButtonType,
      },
    },
    {
      name: 'text',
      title: 'Текст',
      type: 'string',
    },

    {
      name: 'link',
      title: 'Ссылка',
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
  preview: {
    select: {
      text: 'text',
    },
    prepare(selection) {
      const { text } = selection;

      return {
        title: text,
      };
    },
  },
};
