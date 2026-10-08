import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "../AdminDashboard";
import "../index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#1b3022",
          color: "#ffffff",
          borderRadius: "12px",
        },
      }}
    />
    <AdminDashboard />
  </React.StrictMode>
);
