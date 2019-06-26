import { SET_CHART_DATA } from '../../constants/actionTypes';
import { timeFrameFormatter } from '../../util/timeFrameFormatter';

const defaultState = {
  "fiveDay": [],
  "oneMonth": [],
  "oneYear": [],
  "fiveYear": [],
  "max": []
};

const chartDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CHART_DATA:
      return Object.assign({}, state, { [timeFrameFormatter(action.timeFrame)]: action.chartData });

    default:
      return state;
  }
}

export default chartDataReducer;