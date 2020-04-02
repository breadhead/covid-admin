import React from 'react';
import getYouTubeId from 'get-youtube-id';

export const YoutubePreview = ({ value }) => {
  const id = getYouTubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;

  if (!id) {
    return <div>Missing url</div>;
  }

  return (
    <iframe
      title="YouyTube preview"
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
