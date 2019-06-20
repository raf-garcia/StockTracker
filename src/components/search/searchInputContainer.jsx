import { connect } from 'react-redux';
import SearchInput from './searchInput';
import { searchAction } from '../../actions/quotesActions';

const mapDispatchToProps = dispatch => {
  return {
    searchAction: symbol => dispatch(searchAction(symbol))
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);