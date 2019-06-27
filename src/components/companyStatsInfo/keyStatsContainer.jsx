import {connect} from 'react-redux';
import KeyStatsList from './keyStatsList';
import {selectCompanyStats} from '../../util/selectors';

const mapStateToProps = ({ quotes }) => {
  return selectCompanyStats(quotes.companyStats);
}

export default connect(mapStateToProps, null)(KeyStatsList);