import * as actions from '../constants/actionTypes';

const api = ({ dispatch, getState }) => next => action => {
  if (action.type !== actions.API) {
    return next(action);
  }

  const { url, success } = action.payload;

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(success(data)))
    .catch(e => console.log("Error: ", e))
};

export default api;