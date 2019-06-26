import { ERROR } from '../constants/actionTypes';

const handleErrorReducer = (state = null, action) => {
  switch (action.type) {
    case ERROR:
      return action.message;

    default:
      return state;
  }
}

export default handleErrorReducer;