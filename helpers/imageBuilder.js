import imageUrlBuilder from '@sanity/image-url';
import { client } from '../client';

const builder = imageUrlBuilder(client);

export const imageBuilder = source => {
  return builder.image(source);
};
