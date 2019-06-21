import React from 'react';
import { connect } from 'react-redux';

import NewsList from './newsList';
import CompanyInfo from './companyInfo.jsx';
import TopPeers from './topPeers';

const TabIndex = ({ newsList, companyInfo, topPeers }) => {
  return (
    <div className="tab">
      <NewsList newsList={newsList}/>
      <CompanyInfo companyInfo={companyInfo}/>
      <TopPeers topPeers={topPeers}/>
    </div>
  );
};

const mapStateToProps = state => ({
  newsList: state.quotes.companyNews,
  companyInfo: state.quotes.companyInfo,
  topPeers: state.quotes.topPeers
});

export default connect(mapStateToProps, null)(TabIndex);