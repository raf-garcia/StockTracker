import React from 'react';
import NewsListItem from './newsListItem';

const NewsList = ({ newsList }) => {
  return (
    <div>
      <h4>Latest News</h4>
      <ul>
        {newsList.map((news, idx) => (
          <NewsListItem key={idx} news={news} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;