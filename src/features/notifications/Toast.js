import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dismissNotification, selectNotification } from './notifications.slice';
import { BiErrorAlt, BiInfoCircle, BiCheck } from 'react-icons/bi';

const Toast = () => {
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();
  const handleDismiss = (id) => {
    dispatch(dismissNotification({ id }));
  };
  useEffect(() => {
    notifications.forEach((toast) => {
      if (toast.autoDismiss > 0)
        setTimeout(() => {
          handleDismiss(toast.id);
        }, toast.autoDismiss);
    });
  }, [notifications]);

  return (
    <div className="box-border fixed bottom-3 right-3 z-50">
      {notifications.map((toast, i) => {
        const Icon =
          toast.title === 'Error'
            ? BiErrorAlt
            : toast.title === 'Info'
            ? BiInfoCircle
            : BiCheck;
        return (
          <div
            key={i}
            style={{
              backgroundColor: toast.backgroundColor,
              transition: 'transform 1.6s ease-in-out',
              animation: 'toast-in-right 1.7s',
            }}
            className="relative text-sm text-white overflow-hidden mb-1 pl-5 pr-4 py-3 rounded shadow-lg hover:shadow-2xl opacity-90 hover:opacity-100 cursor-pointer "
          >
            <button
              onClick={() => handleDismiss(toast.id)}
              className="relative -right-1 -top-1 float-right font-bold outline-none text-base cursor-pointer"
            >
              X
            </button>
            <div className="float-left mr-3 ">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <p className="w-64 h-5 text-xl">{toast.title}</p>
              <p className="h-8 w-64 text-left text-base m-0 -ml-1 overflow-hidden whitespace-nowrap ">
                {toast.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
