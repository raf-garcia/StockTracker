import { SET_TOP_PEERS } from '../../constants/actionTypes';

const topPeersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TOP_PEERS:
      return [...state, action.topPeers];

    default:
      return state;
  }
}

export default topPeersReducer;