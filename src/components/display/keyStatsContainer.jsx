import {connect} from 'react-redux';
import KeyStats from './keyStats';

const mapStateToProps = (state) => {
    const {companyStats} = state.quotes;

    return {
        companyStats: [
            {value: companyStats.previousClose,
            name: "Previous Close"},    
            {name: "Day Range",
            value: {high: companyStats.high,
                    low: companyStats.low}
            },
            {value: companyStats.latestVolume,
            name: "Volume"},
            {value: companyStats.marketCap,
            name: "Market Cap"},
            {value: companyStats.peRatio,
            name: "P/E Ratio"},
            {value: companyStats.open,
            name: "Open"},    
            {name: "52 Week Range",
            value: {high: companyStats.week52High,
                    low: companyStats.week52Low}
            },
            {value: companyStats.avgTotalVolume,
            name: "Total Avg Volume"},
            {value: companyStats.actualEPS,
            name: "Earnings Per Share"},
            {value: companyStats.dividendYield,
            name: "Dividend & Yield"}
        ]
    };
}

export default connect(mapStateToProps)(KeyStats);
