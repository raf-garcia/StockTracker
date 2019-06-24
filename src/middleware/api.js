import * as actions from '../constants/actionTypes';
import {
  fetchCompanyInformation,
  fetchCompanyQuote,
  fetchCompanyEPS,
  fetchDividendYield,
  fetchCompanyNews,
  fetchTopPeers,
  fetchChartDataDay,
  fetchChartData
} from '../actions/quotesActions';

import setUpdateTime from '../actions/updateTimeAction'
import {getDate} from '../util/currentDate'

const api = ({ dispatch }) => next => action => {
  if (action.type === actions.SEARCH) {
    const { symbol } = action;
    dispatch(fetchCompanyInformation(symbol));
    dispatch(fetchCompanyQuote(symbol));
    dispatch(fetchCompanyEPS(symbol));
    dispatch(fetchDividendYield(symbol));
    dispatch(fetchCompanyNews(symbol));
    dispatch(fetchTopPeers(symbol));
    dispatch(fetchChartDataDay(symbol));
    dispatch(fetchChartData(symbol, "5DM"));
    dispatch(fetchChartData(symbol, "1M"));
    dispatch(fetchChartData(symbol, "1Y"));
    dispatch(fetchChartData(symbol, "5Y"));
    dispatch(fetchChartData(symbol, "MAX"));
    dispatch(setUpdateTime(getDate()));
  }

  if (action.type !== actions.API) {
    return next(action);
  } else if (action.type === actions.API) {
    const { url, success, timeFrame } = action.payload;
  
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(success(data, timeFrame)))
      .catch(e => console.log("Error: ", e));
  }

  return next(action);
};

export default api;