import { 
  RECEIVE_COMPANY_INFO,
  RECEIVE_COMPANY_NEWS,
  RECEIVE_COMPANY_STATS,
  RECEIVE_COMPANY_EPS,
  RECEIVE_DIVIDENDYIELD,
  RECEIVE_TOP_PEERS,
} from '../actions/quotes_action';

const _defaultState = {
  "companyInfo": {},
  "companyNews": [],
  "companyStats": {
    "actualEPS": 0,
    "dividendYield": 0
  },
  "topPeers": []
};

const quotesReducer = (state = _defaultState, action) => {
  
  let newState, newCompanyStats;
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
      
    default:
      return state;
  }
}


export default quotesReducer;