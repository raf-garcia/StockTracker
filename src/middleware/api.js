import * as actions from '../constants/actionTypes';

const api = ({ dispatch }) => next => action => {
  if (action.type !== actions.API) {
    return next(action);
  }
  const { url, success, timeFrame } = action.payload;

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(success(data, timeFrame)))
    .catch(e => console.log("Error: ", e))

};

export default api;