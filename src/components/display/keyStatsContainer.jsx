import {connect} from 'react-redux';
import KeyStats from './keyStats';

const mapStateToProps = (state) => {
    return {
        actualEPS: state.quotes.companyStats.actualEPS,
        avgTotalVolume: state.quotes.companyStats.avgTotalVolume,        
        previousClose: state.quotes.companyStats.previousClose,
        dividendYield: state.quotes.companyStats.dividendYield,
        dayHigh: state.quotes.companyStats.high,
        latestVolume: state.quotes.companyStats.latestVolume,
        dayLow: state.quotes.companyStats.low,
        marketCap: state.quotes.companyStats.marketCap,
        open: state.quotes.companyStats.open,
        peRatio: state.quotes.companyStats.peRatio,
        week52High: state.quotes.companyStats.week52High,
        week52Low: state.quotes.companyStats.week52Low
    };
}

export default connect(mapStateToProps)(KeyStats);