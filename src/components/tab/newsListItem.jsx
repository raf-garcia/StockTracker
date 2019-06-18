import React from 'react';

const formatNewsTimeAgo = (timePublished) => {
  let timeAgo = Math.floor(timePublished / 1000 / 60);

  if (timeAgo < 60) {
    return timeAgo + 'min ago';
  } else {
    timeAgo = Math.floor(timeAgo / 60);
    return timeAgo === 1 ? timeAgo + 'hr ago' : timeAgo + 'hrs ago';
  }
}

const NewsListItem = ({ news }) => {
  const { datetime, url, headline, source } = news;
  let timeAgo = formatNewsTimeAgo(Date.now() - datetime);

  return (
    <li><a href={url}>{headline}</a> {timeAgo} - {source}</li>
  );
};

export default NewsListItem;