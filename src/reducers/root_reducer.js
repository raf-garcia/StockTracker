import { combineReducers } from 'redux';
import quotes from './quotes_reducer';

const rootReducer = combineReducers({
  quotes
});

export default rootReducer;