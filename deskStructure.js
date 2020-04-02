import S from '@sanity/desk-tool/structure-builder';
export default () =>
  S.list()
    .title('Сущности')
    .id('main')
    .items([
      S.listItem()
        .id('partners')
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
        .title('Эксперты')
        .child(
          S.documentList()
            .id('allExperts')
            .title('Эксперты')
            .menuItems(S.documentTypeList('expert').getMenuItems())
            .filter('_type == $type')
            .params({ type: 'expert' }),
        ),
      S.listItem()
        .id('Articles')
        .title('Статьи')
        .child(
          S.documentList()
            .id('allArticles')
            .title('Статьи')
            .menuItems(S.documentTypeList('article').getMenuItems())
            .filter('_type == $type')
            .params({ type: 'article' }),
        ),
    ]);
