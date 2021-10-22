export const errorNotification = (message, autoDismiss = -1) => ({
  id: (Math.random() + 1).toString(36).substring(7),
  title: 'Error',
  message: message,
  backgroundColor: '#d9534f',
  autoDismiss: autoDismiss,
});

export const infoNotification = (message, autoDismiss = -1) => ({
  id: (Math.random() + 1).toString(36).substring(7),
  title: 'Info',
  description: message,
  backgroundColor: '#FCA311',
  autoDismiss: autoDismiss,
});

export const successNotification = (message, autoDismiss = -1) => ({
  id: (Math.random() + 1).toString(36).substring(7),
  title: 'Success',
  description: message,
  backgroundColor: '#5cb85c',
  autoDismiss: autoDismiss,
});
