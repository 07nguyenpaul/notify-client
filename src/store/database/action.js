import * as types from '../actionTypes';
import Database from '../../services/Database';
import { sortNotifications } from '../../utils';

export function fetchNotifications() {
  return async dispatch => {
    dispatch(Database.fetchNotificationsRequest());

    try {
      const notifications = await Database.fetchNotifications();
      const sortedNotifications = await sortNotifications(notifications);
      dispatch(fetchNotificationsSuccess(sortedNotifications));
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
