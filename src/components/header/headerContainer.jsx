import {connect} from 'react-redux';
import Header from './header';

const mapStateToProps = state => {
    const {companyStats, companyInfo} = state.quotes;
    
    return {
        exchange: companyInfo.exchange,
        sector: companyInfo.sector,
        latestPrice: companyStats.latestPrice,
        change: companyStats.change,
        changePercent: companyStats.changePercent
    };
};

export default connect(mapStateToProps, null)(Header);