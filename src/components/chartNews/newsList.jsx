import React from 'react';
import NewsListItem from './newsListItem';

const NewsList = ({ newsList }) => {
  return (
    <div className="section-news__list">
      <h2 className="heading-section">Latest News</h2>
      <ul>
        {newsList.map((news, idx) => (
          <NewsListItem key={idx} news={news} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;