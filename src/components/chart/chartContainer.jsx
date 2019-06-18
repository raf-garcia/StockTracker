import {connect} from 'react-redux';
import Chart from './chart';

const mapStateToProps = (state) => {

    return {state};
}

export default connect(mapStateToProps)(Chart);