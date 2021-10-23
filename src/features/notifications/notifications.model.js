export const errorNotification = (description, autoDismiss = -1, title = "Error") => ({
  id: (Math.random() + 1).toString(36).substring(7),
  backgroundColor: "#d9534f",
  title,
  description,
  autoDismiss,
  type: "error",
});

export const infoNotification = (description, autoDismiss = -1, title = "Info") => ({
  id: (Math.random() + 1).toString(36).substring(7),
  backgroundColor: "#FCA311",
  title,
  description,
  autoDismiss,
  type: "info",
});

export const successNotification = (description, autoDismiss = -1, title = "Success") => ({
  id: (Math.random() + 1).toString(36).substring(7),
  backgroundColor: "#5cb85c",
  title,
  description,
  autoDismiss,
  type: "success",
});
