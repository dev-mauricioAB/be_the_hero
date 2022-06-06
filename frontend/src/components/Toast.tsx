import React from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IToast {
  type: "success" | "warn" | "error";
  message: string;
  config: ToastOptions;
}

export const showToast = ({ type, message, config }: IToast) => {
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
