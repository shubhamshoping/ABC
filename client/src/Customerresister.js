



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Customerresister() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [gmailTouched, setGmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const navigate = useNavigate();

  const isNameValid = name.length >= 3;
  const isGmailValid = gmail.includes("@gmail.com");
  const isPasswordValid = password.length > 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isNameValid) {
      alert("Name is invalid");
      return;
    }
    if (!isGmailValid) {
      alert("Gmail is invalid");
      return;
    }
    if (!isPasswordValid) {
      alert("Password is invalid");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/customer-resister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, gmail, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Customer registered successfully!");
        navigate("/customerlogin");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "500px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          boxShadow:
            "0 0 15px rgba(255, 0, 0, 0.6), 0 0 15px rgba(0, 255, 0, 0.6), 0 0 15px rgba(0, 0, 255, 0.6)",
          border: "5px solid rgba(255, 255, 255, 0.3)",
          padding: "30px",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>Customer Register</h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameTouched(true)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
                background: "rgba(255, 255, 255, 0.3)",
                color: "#fff",
              }}
            />
            {nameTouched && !isNameValid && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Name must be at least 3 characters long.
              </span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>Gmail</label>
            <input
              type="text"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              onFocus={() => setGmailTouched(true)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
                background: "rgba(255, 255, 255, 0.3)",
                color: "#fff",
              }}
            />
            {gmailTouched && !isGmailValid && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Gmail must include "@gmail.com".
              </span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordTouched(true)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
                background: "rgba(255, 255, 255, 0.3)",
                color: "#fff",
              }}
            />
            {passwordTouched && !isPasswordValid && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Password must be more than 6 characters long.
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!isNameValid || !isGmailValid || !isPasswordValid}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              background: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
