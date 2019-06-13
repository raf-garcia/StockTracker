import {connect} from 'react-redux';
import Header from './header';

const mapStateToProps = state => {
    let percentChange = String((state.quotes.companyStats.changePercent*100).toFixed(2))+"%";
    return {
        exchange: state.quotes.companyInfo.exchange,
        sector: state.quotes.companyInfo.sector,
        latestPrice: state.quotes.companyStats.latestPrice,
        change: state.quotes.companyStats.change,
        changePercent: percentChange
    };
};

export default connect(mapStateToProps)(Header);