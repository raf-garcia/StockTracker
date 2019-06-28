import React from 'react';
import { connect } from 'react-redux';
import ChartContainer from '../chart/chartContainer';
import NewsList from './newsList';

const ChartStatsLayout = ({ newsList}) => {
  return (
    <div className = "section-chart-news">
      <ChartContainer />
      <NewsList newsList={newsList}/>
    </div>
  );
}

const mapStateToProps = state => ({
  newsList: state.quotes.companyNews
});

export default connect(mapStateToProps, null)(ChartStatsLayout);