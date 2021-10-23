import { store } from "store/store";
import { errorNotification } from "features/notifications/notifications.model";

const getErrorTitle = queryKey => {
  if (queryKey[0] === "ACCU") return "Weather data error";
  if (queryKey[0] === "GOOGLE") return "Error getting image";
  return "Network error";
};

class QueryError extends Error {
  constructor(queryKey, message) {
    super(message);
    this.queryKey = queryKey;
  }
}

export const queryErrorHandler = error => {
  const errorTitle = getErrorTitle(error.queryKey);
  const exists = store.getState().notifications.items.some(notf => notf.title === errorTitle);
  if (!exists) store.dispatch({ type: "notifications/addNotification", payload: errorNotification(error.message, 5000, errorTitle) });
};

export default QueryError;
