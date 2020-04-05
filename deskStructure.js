import S from '@sanity/desk-tool/structure-builder';
import { MdPeople, MdPeopleOutline } from 'react-icons/md';
import { FiFileText } from 'react-icons/fi';
import { AiFillTags } from 'react-icons/ai';
import { getListItem } from './helpers/getListItem';
import { MdInsertLink, FaHospital } from 'react-icons/all';

export default () =>
  S.list()
    .title('Сущности')
    .id('main')
    .items([
      getListItem({ type: 'partner', name: 'Партнеры', icon: MdPeople }),
      getListItem({
        type: 'expert',
        name: 'Эксперты справочной',
        icon: MdPeopleOutline,
      }),
      getListItem({ type: 'news', name: 'Новости', icon: FiFileText }),
      getListItem({ type: 'article', name: 'Статьи', icon: FiFileText }),
      getListItem({ type: 'tag', name: 'Теги', icon: AiFillTags }),
      getListItem({
        type: 'expertBoard',
        name: 'Экспертный совет',
        icon: MdPeopleOutline,
      }),
      getListItem({
        type: 'hospital',
        name: 'Больницы',
        icon: FaHospital,
      }),
      getListItem({
        type: 'resource',
        name: 'Оф. ресурсы для врачей',
        icon: MdInsertLink,
      }),
    ]);
