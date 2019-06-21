import { SET_CHART_DATA_DAY } from '../../constants/actionTypes';

const chartDataDayReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHART_DATA_DAY:
      return action.chartData;

    default:
      return state;
  }
}

export default chartDataDayReducer;