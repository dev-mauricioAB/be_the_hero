import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = ({ type, message, config }) => {
  switch (type) {
    case "success":
      toast.success(message, config && config);
      break;
    case "warn":
      toast.warn(message, config && config);
      break;
    case "error":
      toast.error(message, config && config);
      break;
    default:
      toast.info(message, config && config);
  }
};

export default function ToastAnimated() {
  return <ToastContainer />;
}
