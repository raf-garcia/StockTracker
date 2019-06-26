import { combineReducers } from 'redux';
import companyInfo from './companyInfoReducer';
import companyNews from './companyNewsReducer';
import companyStats from './companyStatsReducer';
import topPeers from './topPeersReducer';
import chartData from './chartDataReducer';
import chartDataDay from './chartDataDayReducer';
import companyNames from './companyNamesReducer';


const quotesReducer = combineReducers({
  companyInfo,
  companyNews,
  companyStats,
  topPeers,
  chartData,
  chartDataDay,
  companyNames
});

export default quotesReducer;