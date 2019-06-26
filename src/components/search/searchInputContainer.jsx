import { connect } from 'react-redux';
import SearchInput from './searchInput';
import { searchAction } from '../../actions/quotesActions';

const mapStateToProps = ({quotes}) => {
  const {companyName, symbol} = quotes.companyInfo;
  return {
    companyName,
    symbol
  };
}

const mapDispatchToProps = dispatch => {
  return {
    searchAction: symbol => dispatch(searchAction(symbol))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);