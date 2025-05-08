















// Customer.js
import React from "react";
import Effect2 from "./immage/Effect2.jpg";
import { useNavigate } from "react-router-dom";

export default function Customer() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${Effect2})`,
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
      <h1 style={{ marginTop: "2rem" }}>Customer Panel</h1>
      <button
        onClick={() => navigate("/Customerresister")}
        style={{
          margin: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "rgba(0, 128, 0, 0.7)",
          border: "none",
          borderRadius: "5px",
          color: "white",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        Customer Resister
      </button>
      <button
        onClick={() => navigate("/Customerlogin")}
        style={{
          margin: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "rgba(255, 165, 0, 0.7)",
          border: "none",
          borderRadius: "5px",
          color: "white",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        Customer Login
      </button>
    </div>
  );
}
