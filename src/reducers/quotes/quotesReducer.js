import { combineReducers } from 'redux';
import companyInfo from './companyInfoReducer';
import companyNews from './companyNewsReducer';
import companyStats from './companyStatsReducer';
import topPeers from './topPeersReducer';
import chartData from './chartDataReducer';
import chartDataDay from './chartDataDayReducer';

const quotesReducer = combineReducers({
  companyInfo,
  companyNews,
  companyStats,
  topPeers,
  chartData,
  chartDataDay 
});

export default quotesReducer;