import { FaHandHoldingHeart } from 'react-icons/fa';

export const hospitalsHelpWidget = {
  name: 'hospitalsHelpWidget',
  title: 'Помощь больницам',
  icon: FaHandHoldingHeart,
  type: 'document',
  fields: [
    {
      name: 'helpedCount',
      title: 'Количество больниц, которым мы помогли',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .integer()
          .positive(),
    },
    {
      name: 'helpWanted',
      title: 'Количество ожидающих помощи',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .integer()
          .positive(),
    },
    {
      name: 'moneyGathered',
      title: 'Собрано средств',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
  ],
};
