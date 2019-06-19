import { connect } from 'react-redux';
import Chart from './chart';
import { selectChartDataDay } from '../../util/selectors';

const mapStateToProps = ({ quotes }) => ({
    data: selectChartDataDay(quotes.chartDataDay)
})

export default connect(mapStateToProps)(Chart);