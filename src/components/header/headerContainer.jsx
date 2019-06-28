import {connect} from 'react-redux';
import Header from './header';
import {changeToPercent } from '../../util/numberFormatter';

const mapStateToProps = ({ quotes, lastUpdate }) => {
  const { companyStats, companyInfo } = quotes;

  return {
    exchange: companyInfo.exchange,
    sector: companyInfo.sector,
    latestPrice: companyStats.latestPrice,
    change: companyStats.change,
    changePercent: changeToPercent(companyStats.changePercent),
    lastUpdate: lastUpdate
  };
};

export default connect(mapStateToProps, null)(Header);