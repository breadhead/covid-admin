import { callToAction } from './objects/callToAction';
import { customImage } from './objects/customImage';
import { bodyPortableText } from './objects/portable-text/bodyPortableText';
import { actionButton } from './objects/actionButton/actionButton';
import partner from './references/partner';
import expert from './references/expert';
import article from './references/article';
import { smallText } from './objects/smallText/smallText';
import { smallBlockText } from './objects/portable-text/smallBlockText';
import { youtube } from './objects/video/youtube';
import { actionBlock } from './objects/actionBlock/actionBlock';
import { category } from './references/category';

import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';
import expertBoard from './references/expertBoard';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents

    partner,
    expert,
    article,
    expertBoard,
    // objects

    callToAction,
    customImage,

    actionButton,
    bodyPortableText,
    smallText,
    smallBlockText,
    youtube,
    actionBlock,

    category,
  ]),
});
