import { createAction } from 'redux-actions';

export default {
  clearFilters: createAction('CLEAR_FILTERS'),
  setCategoryFilter: createAction('SET_CATEGORY_FILTER'),
  splashClose: createAction('SPLASH_CLOSE'),
  splashOpen: createAction('SPLASH_OPEN')
};
