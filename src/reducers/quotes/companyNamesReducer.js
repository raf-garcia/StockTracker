import { SET_COMPANY_NAMES } from '../../constants/actionTypes';

const companyNamesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COMPANY_NAMES:
      return action.companyNames;

    default:
      return state;
  }
}

export default companyNamesReducer;