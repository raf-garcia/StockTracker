import { SET_COMPANY_INFO } from '../../constants/actionTypes';

const companyInfoReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_COMPANY_INFO:
      return Object.assign({}, state, action.companyInfo);
    
    default:
      return state;
  }
}

export default companyInfoReducer;