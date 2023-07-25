import React from "react";
import { ToastContainer, toast } from "react-toastify";

export function notify(text, type = "success") {
  return toast(text, { type });
}

const Toastify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

export default Toastify;
