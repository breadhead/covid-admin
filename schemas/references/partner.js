import {PartnerType} from "../types/PartnerType";
import {PageType} from "../types/PageType";

const partner = {
  name: 'partner',
  title: 'Партнер',
  type: 'document',
  fields: [
    {
      name: 'status',
      title: 'Активный',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'sortIndex',
      title: 'Индекс сортировки',
      type: 'number',
      validation: Rule => [Rule.required(), Rule.positive()],
    },
    {
      name: 'type',
      title: 'Тип',
      type: "string",
      options: {
        list: [PartnerType.Info, PartnerType.Infrastructure]
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Название',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      title: 'Url сайта',
      type: 'url',
      options: {
        allowRelative: false,
      },
    },
    {
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'pageToShow',
      title: 'Страница отображения',
      type: 'array',
      of: [{
        type: 'string',
        options: {
          list: [PageType.Main, PageType.Partners]
        }
      }],
    },
  ],
  initialValue: {
    sortIndex: 500,
    status: true,
    pageType: [PageType.Main, PageType.Partners]
  },
  preview: {
    select: {
      title: 'name',
      id: '_id',
      status: 'status',
      logo: 'logo',
    },
    prepare(selection) {
      const { title, id, status, logo } = selection;
      return {
        media: logo,
        title: title,
        subtitle: `${status === true ? 'Active' : 'Disabled'} - ${id}`,
      };
    },
  },
  orderings: [
    {
      title: 'Имя',
      name: 'name',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Сортировка',
      name: 'sort',
      by: [{ field: 'sortIndex', direction: 'asc' }],
    },
  ],
};

export default partner;
