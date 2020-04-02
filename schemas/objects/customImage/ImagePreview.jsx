import React from 'react';
import { imageBuilder } from '../../../helpers/imageBuilder';

export const ImagePreview = ({ value }) => {
  const { image, size } = value;

  if (!image) {
    return <div>Missing image</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!!size && <span style={{ maringBottom: '16px' }}>{size}</span>}
      <img style={{ width: '450px' }} src={imageBuilder(image).url()} />
    </div>
  );
};
