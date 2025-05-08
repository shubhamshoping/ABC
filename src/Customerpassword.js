// import React, { useState } from "react";

// export default function Customerpassword() {
//   const [gmail, setGmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [gmailTouched, setGmailTouched] = useState(false);
//   const [passwordTouched, setPasswordTouched] = useState(false);

//   const isGmailValid = gmail.includes("@gmail.com");
//   const isPasswordValid = password.length > 6;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isGmailValid) {
//       alert("gmail is error");
//       return;
//     }
//     if (!isPasswordValid) {
//       alert("password is error");
//       return;
//     }
//     alert(`${gmail} ${password}`);
//   };

//   const gmailChange = (e) => {
//     setGmail(e.target.value);
//   };

//   const passwordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div>
//         <h1>Customer PASSWORD</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={gmail}
//             onChange={gmailChange}
//             onFocus={() => setGmailTouched(true)}
//           />
//           {gmailTouched && !isGmailValid && (
//             <span style={{ color: 'red' }}>gmail is error</span>
//           )}
//         </div>
//         <div>
//           <input
//             type="text"
//             value={password}
//             onChange={passwordChange}
//             onFocus={() => setPasswordTouched(true)}
//           />
//           {passwordTouched && !isPasswordValid && (
//             <span style={{ color: 'red' }}>password is error</span>
//           )}
//         </div>
//         <button type="submit" disabled={!isGmailValid || !isPasswordValid}>
//           submit
//         </button>
//       </form>
//     </div>
//   );
// }































// Customerpassword Component with Fetch PUT Method


// ..................................original code.................................






// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";


// export default function Customerpassword() {
//   const [gmail, setGmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [gmailTouched, setGmailTouched] = useState(false);
//   const [passwordTouched, setPasswordTouched] = useState(false);

//   const navigate = useNavigate();

//   const isGmailValid = gmail.includes("@gmail.com");
//   const isPasswordValid = password.length > 6;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isGmailValid) {
//       alert("Gmail is invalid.");
//       return;
//     }
//     if (!isPasswordValid) {
//       alert("Password must be at least 7 characters.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/CustomerResister", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ gmail, password }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//         navigate("/Customerlogin");
//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       alert("An error occurred: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Customer Password Update</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Gmail"
//             value={gmail}
//             onChange={(e) => setGmail(e.target.value)}
//             onFocus={() => setGmailTouched(true)}
//           />
//           {gmailTouched && !isGmailValid && (
//             <span style={{ color: "red" }}>Gmail is invalid</span>
//           )}
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Enter New Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onFocus={() => setPasswordTouched(true)}
//           />
//           {passwordTouched && !isPasswordValid && (
//             <span style={{ color: "red" }}>Password must be at least 7 characters</span>
//           )}
//         </div>
//         <button type="submit" disabled={!isGmailValid || !isPasswordValid}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }













import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Customerpassword() {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [gmailTouched, setGmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const navigate = useNavigate();

  const isGmailValid = gmail.includes("@gmail.com");
  const isPasswordValid = password.length > 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isGmailValid) {
      alert("Gmail is invalid.");
      return;
    }
    if (!isPasswordValid) {
      alert("Password must be at least 7 characters.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/CustomerResister", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gmail, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate("/Customerlogin");
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>Customer New password </h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Enter Gmail"
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
              <span style={{ color: "red", fontSize: "12px" }}>Gmail is invalid</span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Enter New Password"
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
                Password must be at least 7 characters
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!isGmailValid || !isPasswordValid}
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
