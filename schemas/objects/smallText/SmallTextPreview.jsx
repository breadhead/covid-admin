import React from 'react';

import s from './SmallText.css';

export const SmallTextPreview = ({ value }) => {
  if (!value) {
    return <div>Missing value</div>;
  }

  const { text } = value;

  return <span className={s.smallText}>{text}</span>;
};
