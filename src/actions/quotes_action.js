export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO';
export const RECEIVE_COMPANY_NEWS = 'RECEIVE_COMPANY_NEWS';
export const RECEIVE_COMPANY_STATS = 'RECEIVE_COMPANY_STATS';
export const RECEIVE_COMPANY_EPS = 'RECEIVE_COMPANY_EPS';
export const RECEIVE_DIVIDENDYIELD = 'RECEIVE_DIVIDENDYIELD';
export const RECEIVE_TOP_PEERS = 'RECEIVE_TOP_PEERS';

export const receiveCompanyInfo = companyInfo => ({
  type: RECEIVE_COMPANY_INFO,
  companyInfo
});

export const receiveCompanyNews = companyNews => ({
  type: RECEIVE_COMPANY_NEWS,
  companyNews
});

export const receiveCompanyStats = companyStats => ({
  type: RECEIVE_COMPANY_STATS,
  companyStats
})

export const receiveCompanyEPS = earningsPerShare => ({
  type: RECEIVE_COMPANY_EPS,
  earningsPerShare
})

export const receiveDividendYield = ({ dividendYield }) => ({
  type: RECEIVE_DIVIDENDYIELD,
  dividendYield
})

export const receiveTopPeers = topPeers => ({
  type: RECEIVE_TOP_PEERS,
  topPeers
})

// thunk action creators
// export const fetchCompanyInfo = symbol => dispatch => (
//   IexAPIUtil.fetchCompanyInformation(symbol).then(companyInfo => (
//     dispatch(receiveCompanyInfo(companyInfo))
//   ))
// );

// export const fetchCompanyNews = symbol => dispatch => (
//   IexAPIUtil.fetchCompanyNews(symbol).then(companyNews => (
//     dispatch(receiveCompanyNews(companyNews))
//   ))
// );

