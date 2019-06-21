import { SET_CHART_DATA } from '../../constants/actionTypes';

const defaultState = {
  "5DM": [],
  "1M": [],
  "5Y": [],
  "MAX": []
};

const chartDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CHART_DATA:
      return Object.assign({}, state, { [action.timeFrame]: action.chartData });

    default:
      return state;
  }
}

export default chartDataReducer;