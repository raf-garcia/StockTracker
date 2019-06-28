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

import setUpdateTime from '../actions/updateTimeAction';
import handleError from '../actions/errorActions';
import {getDate} from '../util/currentDate';
import {APIException} from '../util/exceptions';

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
  }

  if (action.type !== actions.API) {
    return next(action);
  } else if (action.type === actions.API) {
    const { url, success, timeFrame } = action.payload;
  
    fetch(url)
      .then(response => {
        if (response.status === 404){
          throw new APIException("Company Not Found", response.status);
        }
        else if (response.status === 402){
          throw new APIException("API Key Limit Reached", response.status);
        }
        else if (!response.status === 200){
          throw new APIException(response.statusText, response.status);
        }
        return response.json();
      })
      .then(data => {
        dispatch(success(data, timeFrame));
        dispatch(handleError());
        dispatch(setUpdateTime(getDate()));
      })
      .catch(e => dispatch(handleError(e.toString())));
  }

  return next(action);
};

export default api;