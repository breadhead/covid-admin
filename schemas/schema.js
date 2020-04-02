import { phone } from './objects/contactItem/phone';
import { contactItem } from './objects/contactItem/contactItem';
import { link } from './objects/contactItem/link';
import { callToAction } from './objects/callToAction';
import { imageWithSizes } from './objects/imageWithSizes';
import { slide } from './objects/slider/slide';
import { slider } from './objects/slider/slider';
import { accordion, accordionItem } from './objects/accordion';
import { email } from './objects/contactItem/email';
import { bodyPortableText } from './objects/portable-text/bodyPortableText';
import { actionButton } from './objects/actionButton/actionButton';

// First, we must import the schema creator

import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import partner from './references/partner';
import expert from './references/expert';
import article from './references/article';
import { smallText } from './objects/smallText/smallText';

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
    // objects

    phone,
    contactItem,
    link,
    callToAction,
    imageWithSizes,
    slide,
    slider,
    accordion,
    email,
    accordionItem,
    actionButton,
    bodyPortableText,
    smallText,
  ]),
});
