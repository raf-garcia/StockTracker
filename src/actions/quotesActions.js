import * as actions from '../constants/actionTypes';
import {
  API_KEY,
  newsFilters,
  quoteFilters,
  statsFilters,
  companyInfoFilters
} from '../util/apiUtil';

const receiveCompanyInfo = companyInfo => ({
  type: actions.RECEIVE_COMPANY_INFO,
  companyInfo
});

const receiveCompanyNews = companyNews => ({
  type: actions.RECEIVE_COMPANY_NEWS,
  companyNews
});

const receiveCompanyStats = companyStats => ({
  type: actions.RECEIVE_COMPANY_STATS,
  companyStats
})

const receiveCompanyEPS = earningsPerShare => ({
  type: actions.RECEIVE_COMPANY_EPS,
  earningsPerShare
});

const receiveDividendYield = ({ dividendYield }) => ({
  type: actions.RECEIVE_DIVIDENDYIELD,
  dividendYield
});

const receiveTopPeers = topPeers => ({
  type: actions.RECEIVE_TOP_PEERS,
  topPeers
});

export const fetchCompanyInformation = symbol => ({
  type: actions.API,
  payload: {
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/?filter=${companyInfoFilters}&token=${API_KEY}`,
    success: receiveCompanyInfo
  }
});

export const fetchCompanyQuote = symbol => ({
  type: actions.API,
  payload: {
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/quote/?filter=${quoteFilters}&token=${API_KEY}`,
    success: receiveCompanyStats
  }
});

export const fetchCompanyEPS = symbol => ({
  type: actions.API,
  payload: {
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/earnings/1/actualEPS/?token=${API_KEY}`,
    success: receiveCompanyEPS
  }
});

export const fetchDividendYield = symbol => ({
  type: actions.API,
  payload: {
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/stats/?filter=${statsFilters}&token=${API_KEY}`,
    success: receiveDividendYield
  }
});

export const fetchCompanyNews = symbol => ({
  type: actions.API,
  payload: {
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/news/last/5/?filter=${newsFilters}&token=${API_KEY}`,
    success: receiveCompanyNews
  }
});

export const fetchTopPeers = symbol => ({
  type: actions.API,
  payload: {
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/peers/?token=${API_KEY}`,
    success: receiveTopPeers
  }
});