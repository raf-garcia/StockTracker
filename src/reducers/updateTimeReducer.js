import { SET_UPDATE_TIME } from '../constants/actionTypes';
import {getDate} from '../util/currentDate'

const updateTimeReducer = (state = getDate(), action) => {
  switch (action.type) {
    case SET_UPDATE_TIME:
      return action.lastUpdate;

    default:
      return state;
  }
}

export default updateTimeReducer;