




// Admin.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Effect8 from "./immage/Effect8.jpg";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${Effect8})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 style={{ marginTop: "2rem" }}>Admin Panel</h1>
      <button
        onClick={() => navigate("/Adminresister")}
        style={{
          margin: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "rgba(255, 0, 0, 0.7)",
          border: "none",
          borderRadius: "5px",
          color: "white",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        Admin Resister
      </button>
      <button
        onClick={() => navigate("/Adminlogin")}
        style={{
          margin: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "rgba(0, 0, 255, 0.7)",
          border: "none",
          borderRadius: "5px",
          color: "white",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        Admin Login
      </button>
    </div>
  );
}
