import * as actions from '../constants/actionTypes';
import {
  API_KEY,
  newsFilters,
  quoteFilters,
  statsFilters,
  companyInfoFilters
} from '../util/apiUtil';

const setCompanyInfo = companyInfo => ({
  type: actions.SET_COMPANY_INFO,
  companyInfo
});

const setCompanyNews = companyNews => ({
  type: actions.SET_COMPANY_NEWS,
  companyNews
});

const setCompanyStats = companyStats => ({
  type: actions.SET_COMPANY_STATS,
  companyStats
})

const setCompanyEPS = earningsPerShare => ({
  type: actions.SET_COMPANY_EPS,
  earningsPerShare
});

const setDividendYield = ({ dividendYield }) => ({
  type: actions.SET_DIVIDENDYIELD,
  dividendYield
});

const setTopPeers = topPeers => ({
  type: actions.SET_TOP_PEERS,
  topPeers
});

const setChartDataDay = chartData => ({
  type: actions.SET_CHART_DATA_DAY,
  chartData
});

const setChartData = (chartData, timeFrame) => {
  debugger
  return {
    type: actions.SET_CHART_DATA,
    chartData,
    timeFrame
  };
};

const makeUrl = (service, symbol, params) => `https://cloud.iexapis.com/stable/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;
const createAction = (service, symbol, success, params = '') => ({
  type: actions.API,
  payload: {
    url: makeUrl(service, symbol, params),
    success
  }
});

export const fetchCompanyInformation = symbol => createAction('company', symbol, setCompanyInfo, companyInfoFilters);
export const fetchCompanyQuote = symbol => createAction('quote', symbol, setCompanyStats, quoteFilters);
export const fetchCompanyEPS = symbol => createAction('earnings/1/actualEPS', symbol, setCompanyEPS);
export const fetchDividendYield = symbol => createAction('stats', symbol, setDividendYield, statsFilters);
export const fetchCompanyNews = symbol => createAction('news/last/5', symbol, setCompanyNews, newsFilters);
export const fetchTopPeers = symbol => createAction('peers', symbol, setTopPeers);
export const fetchChartDataDay = symbol => createAction('chart/1d', symbol, setChartDataDay);
export const fetchChartData = (symbol, timeFrame) => createAction(`chart/${timeFrame}`, symbol, (chartData) => setChartData(chartData, timeFrame));

export const searchAction = symbol => ({
  type: actions.SEARCH,
  symbol
});