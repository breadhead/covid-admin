export const imageDescription = {
  name: 'imageDescription',
  type: 'array',
  title: 'Image description',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{ title: 'Текст', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Itallic', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
};
