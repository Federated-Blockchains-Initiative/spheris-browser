import { handleActions } from 'redux-actions';
import actions from '../actions/blockchain';

export default handleActions({
  [actions.setContractData]: (state, action) => {
    const newState = {
      catalogConfig: {
        contractAddress: action.data.address,
        abi: action.data.abi
      }
    };
    return { ...state, ...newState };
  }
}, {});
