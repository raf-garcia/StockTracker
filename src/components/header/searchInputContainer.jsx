import { connect } from 'react-redux';
import SearchInput from './searchInput';

import {
  fetchCompanyInformation,
  fetchCompanyQuote,
  fetchCompanyEPS,
  fetchDividendYield,
  fetchCompanyNews,
  fetchTopPeers,
  fetchChartDataDay,
  fetchChartData
} from '../../actions/quotesActions';

const mapDispatchToProps = dispatch => {
  return {
    fetchCompanyInformation: (symbol) => dispatch(fetchCompanyInformation(symbol)),
    fetchCompanyQuote: (symbol) => dispatch(fetchCompanyQuote(symbol)),
    fetchCompanyEPS: (symbol) => dispatch(fetchCompanyEPS(symbol)),
    fetchDividendYield: (symbol) => dispatch(fetchDividendYield(symbol)),
    fetchCompanyNews: (symbol) => dispatch(fetchCompanyNews(symbol)),
    fetchTopPeers: (symbol) => dispatch(fetchTopPeers(symbol)),
    fetchChartDataDay: (symbol) => dispatch(fetchChartDataDay(symbol)),
    fetchChartData: (symbol, timeFrame) => dispatch(fetchChartData(symbol, timeFrame))
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);