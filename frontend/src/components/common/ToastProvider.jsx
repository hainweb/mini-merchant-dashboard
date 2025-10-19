import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 2500,
        style: {
          background: "#f9fafb",
          color: "#111827",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "0.9rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        },
        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
