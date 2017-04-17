/* Libraries */
import { createAction } from 'redux-actions';


export const defaultAction = createAction(
  'DEFAULT_ACTION',
  () => (new Promise((resolve) => {
    resolve({});
  })),
);

export const clearState = createAction(
  'CLEAR_STATE',
  () => (new Promise((resolve) => {
    resolve({});
  })),
);

export const searchQueryChanged = (text) => {
  return {
    type: 'SEARCH_QUERY_CHANGED',
    payload: text
  };
};

export const fetchStated = () => {
  return { type: 'FETCH_STARTED' };
};

export const fetchFinished = () => {
  return { type: 'FETCH_FINISHED' };
}
