import * as types from '../actionTypes';

const initialState = {
  notifications: [],
  requesting: false,
  error: '',
};

export default function database(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_NOTIFICATIONS__REQUEST:
      return { ...state, requesting: true };
    case types.FETCH_NOTIFICATIONS__SUCCESS:
      return {
        ...state,
        requesting: false,
        tubs: action.notifications,
      };
    case types.FETCH_NOTIFICATIONS__FAILURE:
      return { ...state, error: action.error };
    default:
      return false;
  }
}
