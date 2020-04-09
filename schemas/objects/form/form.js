import { IoMdPaper } from 'react-icons/all';
import { FormType, formTypeToString } from '../../types/FormType';

export const form = {
  name: 'form',
  title: 'Форма',
  icon: IoMdPaper,
  type: 'document',
  fields: [
    {
      name: 'formType',
      title: 'Тип формы',
      type: 'string',
      options: {
        list: [
          {
            value: FormType.HospitalAid,
            title: formTypeToString(FormType.HospitalAid),
          },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'fieldOptions',
      title: 'Опции для полей',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'name',
              title: 'Имя поля',
              validation: Rule => Rule.required(),
            },
            {
              type: 'string',
              name: 'value',
              title: 'Значение',
            },
            {
              type: 'boolean',
              name: 'hidden',
              title: 'Скрыть поле',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'formType',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: `Форма: ${formTypeToString(title)}`,
      };
    },
  },
};
