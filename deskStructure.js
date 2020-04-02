import S from '@sanity/desk-tool/structure-builder';
export default () =>
  S.list()
    .title('Сущности')
    .id('main')
    .items([
      S.listItem()
        .id('partners')
        //.icon()
        .title('Партнеры')
        .child(
          S.documentList()
            .id('allPartners')
            .title('Партнеры')
            .menuItems(S.documentTypeList('partner').getMenuItems())
            .filter('_type == $type')
            .params({ type: 'partner' }),
        ),
      S.listItem()
        .id('experts')
        //.icon()
        .title('Эксперты')
        .child(
          S.documentList()
            .id('allExperts')
            .title('Эксперты')
            .menuItems(S.documentTypeList('expert').getMenuItems())
            .filter('_type == $type')
            .params({ type: 'expert' }),
        ),
    ]);
