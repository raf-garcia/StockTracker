import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import log from '../middleware/log';
import api from '../middleware/api';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(log, api)
  )
);

export default configureStore;