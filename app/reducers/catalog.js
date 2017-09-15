import { handleActions } from 'redux-actions';
import actions from '../actions/catalog';

export default handleActions({
  [actions.updateApplicationsList]: (state, action) => {
    const newState = {
      applications: action.data
    };
    return { ...state, ...newState };
  },
  [actions.updateCategoriesList]: (state, action) => {
    const newState = {
      categories: action.data
    };
    return { ...state, ...newState };
  }
}, {});
