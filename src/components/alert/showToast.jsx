"use client";
// src/components/Toast/Toast.jsx
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiCheckCircle } from "react-icons/fi";
// Tailwind-matched toasts (NO success, NO OTP)
export const showToast = {
  success: (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      icon: <FiCheckCircle className="text-green-500 text-xl" />,
      className:
        "bg-green-50 border border-green-300 text-green-700 rounded-full shadow-md",
      progressClassName: "bg-green-500",
    }),
  error: (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 4000,
      className:
        "bg-red-50 border border-red-300 text-red-700 rounded-xl shadow-md",
      progressClassName: "bg-red-400",
    }),

  warning: (msg) =>
    toast.warn(msg, {
      position: "top-right",
      autoClose: 4000,
      className:
        "bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-xl shadow-md",
      progressClassName: "bg-yellow-400",
    }),

  info: (msg) =>
    toast.info(msg, {
      position: "top-right",
      autoClose: 4000,
      className:
        "bg-brand/10 border border-brand/30 text-brand rounded-xl shadow-md",
      progressClassName: "bg-brand",
    }),
};

export default function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
    />
  );
}
