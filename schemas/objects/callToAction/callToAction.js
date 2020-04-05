import { actionButtonType } from '../../../helpers/actionButtonType';
import { linkOptions } from '../../../helpers/linkOptions';

export const callToAction = {
  name: 'callToAction',
  title: ' ',
  type: 'object',
  fields: [
    {
      name: 'status',
      title: 'Активный',
      type: 'boolean',
      layout: 'checkbox',
    },
    {
      name: 'actionButtonType',
      title: 'Тип',
      type: 'string',
      options: {
        layout: 'checkbox',
        list: actionButtonType,
      },
    },
    {
      name: 'actionButtonText',
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
};
