import { combineReducers } from 'redux';
import quotes from './quotes/quotesReducer';
import lastUpdate from './updateTimeReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  quotes,
  lastUpdate,
  error
});

export default rootReducer;