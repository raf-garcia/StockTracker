import { combineReducers } from 'redux';
import quotes from './quotes/quotesReducer';
import lastUpdate from './updateTimeReducer';

const rootReducer = combineReducers({
  quotes,
  lastUpdate
});

export default rootReducer;