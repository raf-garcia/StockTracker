import { connect } from 'react-redux';
import Chart from './chart';
import { selectChartDataDay, selectChartDataFiveDay, selectChartDataOneMonth, selectChartDataYear } from '../../util/selectors';

const mapStateToProps = ({ quotes }) => ({
    oneDayData: selectChartDataDay(quotes.chartDataDay),
    fiveDayData: selectChartDataFiveDay(quotes.chartData.fiveDay),
    oneMonthData: selectChartDataOneMonth(quotes.chartData.oneMonth),
    oneYearData: selectChartDataYear(quotes.chartData.oneYear),
    fiveYearData: selectChartDataYear(quotes.chartData.fiveYear),
    maxData: selectChartDataYear(quotes.chartData.max)
});

export default connect(mapStateToProps, null)(Chart);