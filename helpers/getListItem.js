import S from '@sanity/desk-tool/structure-builder';

export const getListItem = ({ type, name, icon }) =>
  S.listItem()
    .id(type)
    .title(name)
    .icon(icon)
    .child(
      S.documentList()
        .id('all' + type)
        .title(name)
        .menuItems(S.documentTypeList(type).getMenuItems())
        .filter('_type == $type')
        .params({ type: type }),
    );
