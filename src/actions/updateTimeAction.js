import {SET_UPDATE_TIME} from '../constants/actionTypes';

const setUpdateTime = dateTime => ({
  type: SET_UPDATE_TIME,
  lastUpdate: dateTime
});


export default setUpdateTime;