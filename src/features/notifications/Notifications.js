import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dismissNotification, selectNotification } from "./notifications.slice";
import Toast from "./Toast";

const Notifications = () => {
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();
  const handleDismiss = id => {
    dispatch(dismissNotification({ id }));
  };
  useEffect(() => {
    notifications.forEach(toast => {
      if (toast.autoDismiss > 0)
        setTimeout(() => {
          handleDismiss(toast.id);
        }, toast.autoDismiss);
    });
    // eslint-disable-next-line
  }, [notifications]);

  return (
    <div className="box-border fixed bottom-3 right-3 z-50">
      {notifications.map(notf => (
        <Toast handleDismiss={handleDismiss} key={notf.id} notification={notf} />
      ))}
    </div>
  );
};

export default Notifications;
