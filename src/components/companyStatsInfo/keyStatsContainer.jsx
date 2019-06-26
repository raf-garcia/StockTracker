import {connect} from 'react-redux';
import KeyStatsList from './keyStatsList';
import {selectCompanyStats} from '../../util/selectors';

const mapStateToProps = ({quotes}) => {
    const {companyStats} = quotes;

    return selectCompanyStats(companyStats);
}

export default connect(mapStateToProps, null)(KeyStatsList);