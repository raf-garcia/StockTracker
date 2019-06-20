import { 
  SET_COMPANY_INFO,
  SET_COMPANY_NEWS,
  SET_COMPANY_STATS,
  SET_COMPANY_EPS,
  SET_DIVIDENDYIELD,
  SET_TOP_PEERS,
  SET_CHART_DATA_DAY,
  SET_CHART_DATA
} from '../constants/actionTypes';

const defaultState = {
  "companyInfo": {},
  "companyNews": [],
  "companyStats": {
    "actualEPS": null,
    "dividendYield": null
  },
  "topPeers": [],
  "chartData": {
    "5DM": [],
    "1M": [],
    "5Y": [],
    "MAX": []
  },
  "chartDataDay": []
};

const quotesReducer = (state = defaultState, action) => {
  
  let newState, newCompanyStats, newChartData;
  switch(action.type) {
    case SET_COMPANY_INFO:
      newState = Object.assign({}, state, { "companyInfo": action.companyInfo });
      return newState;
      
    case SET_COMPANY_NEWS:
      newState = Object.assign({}, state, { "companyNews": action.companyNews });
      return newState;

    case SET_COMPANY_STATS:
      newCompanyStats = Object.assign({}, state.companyStats, action.companyStats);
      newState = Object.assign({}, state, { "companyStats": newCompanyStats });
      return newState;
      
    case SET_DIVIDENDYIELD:
      newCompanyStats = Object.assign({}, state.companyStats, { "dividendYield": action.dividendYield })
      newState = Object.assign({}, state, { "companyStats": newCompanyStats });
      return newState;
      
    case SET_COMPANY_EPS:
      newCompanyStats = Object.assign({}, state.companyStats, { "actualEPS": action.earningsPerShare });
      newState = Object.assign({}, state, { "companyStats": newCompanyStats });
      return newState;

    case SET_TOP_PEERS:
      newState = Object.assign({}, state, { "topPeers": action.topPeers });
      return newState  
      
    case SET_CHART_DATA:
      newChartData = Object.assign({}, state.chartData, { [action.timeFrame]: action.chartData });
      newState = Object.assign({}, state, {"chartData": newChartData});
      return newState;

    case SET_CHART_DATA_DAY:
      newState = Object.assign({}, state, { "chartDataDay": action.chartData });
      return newState; 
      
    default:
      return state;
  }
}


export default quotesReducer;