import React from 'react';
import NewsListItem from './newsListItem';

const NewsList = ({ newsList }) => {
  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {newsList.map((news, idx) => (
          <NewsListItem key={idx} news={news} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;