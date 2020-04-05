import S from '@sanity/desk-tool/structure-builder';
import { MdPeople, MdPeopleOutline } from 'react-icons/md';
import { FiFileText } from 'react-icons/fi';
import { AiFillTags } from 'react-icons/ai';
import { getListItem } from './helpers/getListItem';

export default () =>
  S.list()
    .title('Сущности')
    .id('main')
    .items([
      getListItem({ type: 'partner', name: 'Партнеры', icon: MdPeople }),
      getListItem({ type: 'expert', name: 'Эксперты', icon: MdPeopleOutline }),
      getListItem({ type: 'article', name: 'Статьи', icon: FiFileText }),
      getListItem({ type: 'category', name: 'Категории', icon: AiFillTags }),
      getListItem({
        type: 'expertBoard',
        name: 'Экспертный совет',
        icon: MdPeopleOutline,
      }),
    ]);
