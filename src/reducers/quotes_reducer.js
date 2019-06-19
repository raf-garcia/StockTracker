import { 
  RECEIVE_COMPANY_INFO,
  RECEIVE_COMPANY_NEWS,
  RECEIVE_COMPANY_STATS,
  RECEIVE_COMPANY_EPS,
  RECEIVE_DIVIDENDYIELD,
  RECEIVE_TOP_PEERS,
  RECEIVE_CHART_DATA_DAY,
  RECEIVE_CHART_DATA
} from '../constants/actionTypes';

const _defaultState = {
  "companyInfo": {},
  "companyNews": [],
  "companyStats": {
    "actualEPS": null,
    "dividendYield": null
  },
  "topPeers": [],
  "chartData": {
    "5D": [],
    "1M": [],
    "5Y": [],
    "MAX": []
  },
  "chartDataDay": []
};

const quotesReducer = (state = _defaultState, action) => {
  
  let newState, newCompanyStats, newChartData;
  switch(action.type) {
    case RECEIVE_COMPANY_INFO:
      newState = Object.assign({}, state, { "companyInfo": action.companyInfo });
      return newState;
      
    case RECEIVE_COMPANY_NEWS:
      newState = Object.assign({}, state, { "companyNews": action.companyNews });
      return newState;

    case RECEIVE_COMPANY_STATS:
      newCompanyStats = Object.assign({}, state.companyStats, action.companyStats);
      newState = Object.assign({}, state, { "companyStats": newCompanyStats });
      return newState;
      
    case RECEIVE_DIVIDENDYIELD:
      newCompanyStats = Object.assign({}, state.companyStats, { "dividendYield": action.dividendYield })
      newState = Object.assign({}, state, { "companyStats": newCompanyStats });
      return newState;
      
    case RECEIVE_COMPANY_EPS:
      newCompanyStats = Object.assign({}, state.companyStats, { "actualEPS": action.earningsPerShare });
      newState = Object.assign({}, state, { "companyStats": newCompanyStats });
      return newState;

    case RECEIVE_TOP_PEERS:
      newState = Object.assign({}, state, { "topPeers": action.topPeers });
      return newState  
      
    case RECEIVE_CHART_DATA:
      newChartData = Object.assign({}, state.chartData, { [action.timeFrame]: action.chartData });
      newState = Object.assign({}, state, {"chartData": newChartData});
      return newState;

    case RECEIVE_CHART_DATA_DAY:
      newState = Object.assign({}, state, { "chartDataDay": action.chartData });
      return newState; 
      
    default:
      return state;
  }
}


export default quotesReducer;