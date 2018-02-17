export function sortNotifications(unsortedNotifications) {
  const notifications = {
    events: [],
    accounts: [],
  };

  unsortedNotifications.map(notification => {
    if (notification.watch_type == 'event') {
      return notifications.events.push(notification);
    } else if (notification.watch_type == 'account') {
      return notifications.accounts.push(notification);
    }
  });

  return notifications;
}

export function checkPercentage(tubs) {
  // console.log(tubs);
  if (tubs) {
  }
}

export default { sortNotifications, checkPercentage };
