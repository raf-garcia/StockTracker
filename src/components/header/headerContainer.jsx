import {connect} from 'react-redux';
import Header from './header';
import {changeToPercent } from '../../util/numberFormatter';

const mapStateToProps = state => {
    const {companyStats, companyInfo} = state.quotes;
    
    return {
        exchange: companyInfo.exchange,
        sector: companyInfo.sector,
        latestPrice: companyStats.latestPrice,
        change: companyStats.change,
        changePercent: changeToPercent(companyStats.changePercent)
    };
};

export default connect(mapStateToProps, null)(Header);