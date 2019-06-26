import React from 'react';
import { connect } from 'react-redux';
import KeyStatsContainer from './keyStatsContainer';
import CompanyInfo from './companyInfo';
import TopPeers from './topPeers';

const CompanyStatsInfoLayout = ({ companyInfo, topPeers }) => {
  return (
    <div className="company-wrapper">
      <KeyStatsContainer />
    <div className = "company-wrapper__info">
      <CompanyInfo companyInfo={companyInfo}/>
      <TopPeers topPeers={topPeers}/>
    </div>
    </div>
  );
};

const mapStateToProps = state => ({
  companyInfo: state.quotes.companyInfo,
  topPeers: state.quotes.topPeers
});

export default connect(mapStateToProps, null)(CompanyStatsInfoLayout);