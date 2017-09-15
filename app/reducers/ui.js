import { handleActions } from 'redux-actions';
import actions from '../actions/ui';

export default handleActions({
  [actions.splashClose]: (state, action) => {
    const newState = {
      splash: {
        open: false
      }
    };
    return { ...state, ...newState };
  },
  [actions.splashOpen]: (state, action) => {
    const newState = {
      splash: {
        open: true
      }
    };
    return { ...state, ...newState };
  },
  [actions.setCategoryFilter]: (state, action) => {
    const newState = {
      filters: {
        category: action.payload
      }
    };
    return { ...state, ...newState };
  },
  [actions.clearFilters]: (state, action) => {
    const newState = {
      filters: {
        category: null
      }
    };
    return { ...state, ...newState };
  }
}, {});
