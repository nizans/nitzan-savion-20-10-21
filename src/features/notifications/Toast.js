import React from "react";
import { BiErrorAlt, BiInfoCircle, BiCheck } from "react-icons/bi";

const Toast = ({ notification, handleDismiss }) => {
  const Icon = notification.type === "error" ? BiErrorAlt : notification.type === "info" ? BiInfoCircle : BiCheck;
  return (
    <div
      style={{
        backgroundColor: notification.backgroundColor,
        transition: "transform 1.6s ease-in-out",
        animation: "toast-in-right 1.7s",
      }}
      className="relative text-sm text-white overflow-hidden mb-1 pl-5 pr-4 py-3 rounded shadow-lg hover:shadow-2xl opacity-90 hover:opacity-100 cursor-pointer "
    >
      <button
        onClick={() => handleDismiss(notification.id)}
        className="relative -right-1 -top-1 float-right font-bold outline-none text-base cursor-pointer"
      >
        X
      </button>
      <div className="float-left mr-3 ">
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <p className="w-64 h-5 text-xl">{notification.title}</p>
        <p className="h-8 w-64 text-left text-base m-0 -ml-1 overflow-hidden whitespace-nowrap ">{notification.description}</p>
      </div>
    </div>
  );
};

export default Toast;
