import { connect } from 'react-redux';
import SearchInput from './searchInput';
import { searchAction } from '../../actions/quotesActions';
import {fetchCompanyNames} from '../../actions/quotesActions';

const mapStateToProps = ({quotes}) => {
  const {companyName, symbol} = quotes.companyInfo;
  const {companyNames} = quotes;
  return {
    companyName,
    companyNames,
    symbol
  };
}

const mapDispatchToProps = dispatch => {
  return {
    searchAction: symbol => dispatch(searchAction(symbol)),
    fetchCompanyNames: () => dispatch(fetchCompanyNames())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);