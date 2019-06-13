import { connect } from 'react-redux';
import SearchInput from './searchInput';

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(SearchInput);