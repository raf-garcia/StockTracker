import { connect } from 'react-redux';
import SearchInput from './searchInput';

import {
  fetchCompanyInformation,
  fetchCompanyQuote,
  fetchCompanyEPS,
  fetchDividendYield,
  fetchCompanyNews,
  fetchTopPeers
} from '../../actions/quotesActions';

const mapDispatchToProps = dispatch => {
  return {
    fetchCompanyInformation: (symbol) => dispatch(fetchCompanyInformation(symbol)),
    fetchCompanyQuote: (symbol) => dispatch(fetchCompanyQuote(symbol)),
    fetchCompanyEPS: (symbol) => dispatch(fetchCompanyEPS(symbol)),
    fetchDividendYield: (symbol) => dispatch(fetchDividendYield(symbol)),
    fetchCompanyNews: (symbol) => dispatch(fetchCompanyNews(symbol)),
    fetchTopPeers: (symbol) => dispatch(fetchTopPeers(symbol)),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);