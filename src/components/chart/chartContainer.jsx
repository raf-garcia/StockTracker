import {connect} from 'react-redux';
import Chart from './chart';

const mapStateToProps = ({quotes}) => {
    const data = quotes.chartDataDay.map((data) => ({name: data.minute, price: data.average}));
    return {data};
}

export default connect(mapStateToProps)(Chart);