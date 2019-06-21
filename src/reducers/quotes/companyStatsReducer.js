import { SET_COMPANY_STATS } from '../../constants/actionTypes';

const defaultState = {
  "actualEPS": null,
  "dividendYield": null
};

const companyStatsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_COMPANY_STATS:
      return Object.assign({}, state, action.companyStats);

    default:
      return state;
  }
}

export default companyStatsReducer;