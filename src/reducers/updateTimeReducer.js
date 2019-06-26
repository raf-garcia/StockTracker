import { SET_UPDATE_TIME } from '../constants/actionTypes';

const updateTimeReducer = (state = null, action) => {
  switch (action.type) {
    case SET_UPDATE_TIME:
      return action.lastUpdate;

    default:
      return state;
  }
}

export default updateTimeReducer;