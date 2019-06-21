import { SET_COMPANY_NEWS } from '../../constants/actionTypes';

const companyNewsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COMPANY_NEWS:
      return action.companyNews;

    default:
      return state;
  }
}

export default companyNewsReducer;