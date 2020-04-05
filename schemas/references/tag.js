export const tag = {
  name: 'tag',
  title: 'Тег',
  type: 'document',
  fields: [
    {
      name: 'status',
      title: 'Активный',
      type: 'boolean',
    },
    {
      name: 'name',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'code',
      title: 'url-код',
      type: 'slug',
      description: 'После заполнения поля "Название" нажмите "Generate"',
      options: {
        source: doc =>
          doc.name ? doc.name : '',
        maxLength: 250,
      },
      validation: Rule =>
        Rule.required().error('Url-код обязательное для заполнение поле'),
    },
    {
      name: 'sortIndex',
      title: 'Сортировка',
      type: 'number',
      description:
        'Чем больше цифра в этом поле, тем выше будет положение на странице',
      validation: Rule =>
        Rule.required()
          .min(1)
          .error('Сортировка должна быть целым числом больше 0'),
    },
  ],
  initialValue: {
    status: true,
    sortIndex: 500,
  },
  preview: {
    select: {
      title: 'name',
      id: '_id',
      status: 'status',
    },
    prepare(selection) {
      const { title, id, status } = selection;

      return {
        title: title,
        subtitle: `${status === true ? 'Active' : 'Disabled'} - ${id}`,
      };
    },
  },
};
