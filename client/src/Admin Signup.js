import React, { useState } from "react";

export default function AdminSignup() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [gmailTouched, setGmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const isNameValid = /^[A-Za-z\s]+$/.test(name) && name.length >= 3;
  const isGmailValid = gmail.includes("@gmail.com");
  const isPasswordValid = password.length > 4;
  const isPhoneValid = /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNameValid || !isGmailValid || !isPasswordValid || !isPhoneValid) {
      alert("Please fill out all fields correctly.");
      return;
    }
    alert(`Form submitted successfully!`);
    console.log({ name, gmail, password, phone });
    window.location.reload();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #2c3e50, #4ca1af)", // Background gradient
      }}
    >
      <div
        style={{
          width: "350px",
          height: "350px",
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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>ADMIN SIGNUP</h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
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
                Enter a valid name (only letters and spaces, at least 3 characters)
              </span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setPhoneTouched(true)}
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
            {phoneTouched && !isPhoneValid && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Enter a valid phone number (exactly 10 digits)
              </span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
              Gmail
            </label>
            <input
              type="text"
              placeholder="Enter your Gmail"
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
                Enter a valid Gmail (must include @gmail.com)
              </span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
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
                Enter a valid password (at least 5 characters)
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!isNameValid || !isGmailValid || !isPasswordValid || !isPhoneValid}
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
