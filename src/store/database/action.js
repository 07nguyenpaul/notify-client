import * as types from '../actionTypes';
import Database from '../../services/database';
import { sortNotifications } from '../../utils';

export function fetchNotifications() {
  return async dispatch => {
    dispatch(fetchNotificationsRequest());

    try {
      const notifications = await Database.fetchNotifications();
      dispatch(fetchNotificationsSuccess(notifications));
    } catch (err) {
      dispatch(fetchNotificationsFailure(err));
    }
  };
}

export function fetchNotificationsRequest() {
  return { type: types.FETCH_NOTIFICATIONS__REQUEST };
}

export function fetchNotificationsSuccess(notifications) {
  return {
    type: types.FETCH_NOTIFICATIONS__SUCCESS,
    notifications: notifications,
  };
}

export function fetchNotificationsFailure(err) {
  return { type: types.FETCH_NOTIFICATIONS__FAILURE, error: err };
}
