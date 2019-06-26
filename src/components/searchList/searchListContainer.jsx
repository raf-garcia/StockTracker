import {connect} from 'react-redux';
import SearchList from './searchList';
import {fetchCompanyNames} from '../../actions/quotesActions';

const mapStateToProps = (state) => {
  const {companyNames} = state.quotes;
    return {
        companyNames
      };
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCompanyNames: () => dispatch(fetchCompanyNames()),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
