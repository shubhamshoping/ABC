// import React, { useState } from "react";

// export default function Adminpassword() {
//   const [password, setPassword] = useState("");
//   const [passwordTouched, setPasswordTouched] = useState(false);

//   const isPasswordValid = password.length > 4;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isPasswordValid) {
//       alert("Please enter a valid password.");
//       return;
//     }
//     alert(`Password submitted successfully!`);
//     console.log({ password });
//     window.location.reload();
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
//       }}
//     >
//       {/* Form Container */}
//       <div
//         style={{
//           width: "350px",
//           height: "250px",
//           background: "rgba(255, 255, 255, 0.1)",
//           borderRadius: "50%",
//           boxShadow:
//             "0 0 15px rgba(255, 0, 0, 0.6), 0 0 15px rgba(0, 255, 0, 0.6), 0 0 15px rgba(0, 0, 255, 0.6)",
//           border: "5px solid rgba(255, 255, 255, 0.3)",
//           padding: "30px",
//           backdropFilter: "blur(10px)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <h1 style={{ color: "#fff", marginBottom: "20px" }}>ADMIN PASSWORD</h1>
//         <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
//           <div style={{ marginBottom: "15px" }}>
//             <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               onFocus={() => setPasswordTouched(true)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 border: "none",
//                 outline: "none",
//                 background: "rgba(255, 255, 255, 0.3)",
//                 color: "#fff",
//               }}
//             />
//             {passwordTouched && !isPasswordValid && (
//               <span style={{ color: "red", fontSize: "12px" }}>
//                 Enter a valid password (at least 5 characters)
//               </span>
//             )}
//           </div>
//           <button
//             type="submit"
//             disabled={!isPasswordValid}
//             style={{
//               width: "100%",
//               padding: "10px",
//               borderRadius: "5px",
//               border: "none",
//               background: "rgba(0, 0, 0, 0.7)",
//               color: "#fff",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
























import React, { useState } from "react";


import { useNavigate } from "react-router-dom"; // Import useNavigate



export default function Adminpassword() {
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [gmail, setGmail] = useState(""); // Added Gmail state
  const [gmailTouched, setGmailTouched] = useState(false);


  const navigate = useNavigate(); // Initialize navigate


  const isPasswordValid = password.length > 4;
  const isGmailValid = gmail.includes("@gmail.com");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPasswordValid || !isGmailValid) {
      alert("Please enter valid credentials.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/update-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gmail, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/adminlogin"); // Navigate to AdminLogin on success
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      alert("Error connecting to the server.");
      console.error(err);
    }

    setPassword("");
    setGmail("");
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
          width: "350px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>ADMIN PASSWORD</h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
              Gmail
            </label>
            <input
              type="email"
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
                Enter a valid Gmail address (must include @gmail.com)
              </span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
             New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new password"
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
            disabled={!isPasswordValid || !isGmailValid}
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
