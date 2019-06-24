import { connect } from 'react-redux';
import Chart from './chart';
import { selectChartDataDay, selectChartDataFiveDay } from '../../util/selectors';

const mapStateToProps = ({ quotes }) => ({
    oneDayData: selectChartDataDay(quotes.chartDataDay),
    fiveDayData: selectChartDataFiveDay(quotes.chartData.fiveDay)
});

export default connect(mapStateToProps, null)(Chart);