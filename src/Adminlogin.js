// import React, { useState } from "react";

// export default function Adminlogin() {
//   const [name, setName] = useState("");
//   const [gmail, setGmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nameTouched, setNameTouched] = useState(false);
//   const [gmailTouched, setGmailTouched] = useState(false);
//   const [passwordTouched, setPasswordTouched] = useState(false);

//   const isNameValid = name.length >= 3;
//   const isGmailValid = gmail.includes("@gmail.com");
//   const isPasswordValid = password.length > 6;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isNameValid) {
//       alert("name is error");
//       return;
//     }
//     if (!isGmailValid) {
//       alert("gmail is error");
//       return;
//     }
//     if (!isPasswordValid) {
//       alert("password is error");
//       return;
//     }
//     alert(`${name} ${gmail} ${password}`);
//   };

//   const nameChange = (e) => {
//     setName(e.target.value);
//   };

//   const gmailChange = (e) => {
//     setGmail(e.target.value);
//   };

//   const passwordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={nameChange}
//             onFocus={() => setNameTouched(true)}
//           />
//           {nameTouched && !isNameValid && (
//             <span style={{ color: "red" }}>name is error</span>
//           )}
//         </div>
//         <div>
//           <input
//             type="text"
//             value={gmail}
//             onChange={gmailChange}
//             onFocus={() => setGmailTouched(true)}
//           />
//           {gmailTouched && !isGmailValid && (
//             <span style={{ color: "red" }}>gmail is error</span>
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
//             <span style={{ color: "red" }}>password is error</span>
//           )}
//         </div>
//         <button
//           type="submit"
//           disabled={!isNameValid || !isGmailValid || !isPasswordValid}
//         >
//           submit
//         </button>
//       </form>
//     </div>
//   );
// }










// ..........................Original code......................................................................






// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom"; 


// export default function Adminlogin() {
//   const [name, setName] = useState("");
//   const [gmail, setGmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nameTouched, setNameTouched] = useState(false);
//   const [gmailTouched, setGmailTouched] = useState(false);
//   const [passwordTouched, setPasswordTouched] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");


//   const navigate = useNavigate();


//   const isNameValid = name.length >= 3;
//   const isGmailValid = gmail.includes("@gmail.com");
//   const isPasswordValid = password.length > 6;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isNameValid || !isGmailValid || !isPasswordValid) {
//       alert("Please fix validation errors before submitting.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/adminlogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, gmail, password }),
//       });

//       const data = await response.json();
//       setResponseMessage(data.message);

//       if (data.success) {
//         setName("");
//         setGmail("");
//         setPassword("");
//         setNameTouched(false);
//         setGmailTouched(false);
//         setPasswordTouched(false);

//         navigate("/adminhome");

//       }
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       setResponseMessage("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div>
//         <h1>Admin Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             onFocus={() => setNameTouched(true)}
//           />
//           {nameTouched && !isNameValid && (
//             <span style={{ color: "red" }}>Name must be at least 3 characters long.</span>
//           )}
//         </div>
//         <div>
//           <input
//             type="text"
//             value={gmail}
//             onChange={(e) => setGmail(e.target.value)}
//             onFocus={() => setGmailTouched(true)}
//           />
//           {gmailTouched && !isGmailValid && (
//             <span style={{ color: "red" }}>Gmail must include "@gmail.com".</span>
//           )}
//         </div>
//         <div>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onFocus={() => setPasswordTouched(true)}
//           />
//           {passwordTouched && !isPasswordValid && (
//             <span style={{ color: "red" }}>Password must be more than 6 characters long.</span>
//           )}
//         </div>
//         <button
//           type="submit"
//           disabled={!isNameValid || !isGmailValid || !isPasswordValid}
//         >
//           Submit
//         </button>
//       </form>
//       {responseMessage && <p>{responseMessage}</p>}

//       <button onClick={() => navigate("/admingmail")}>
//         {/* New code: Navigate to Admingmail when clicked */}
//         Forget password
//       </button>
//     </div>
//   );
// }























import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Adminlogin() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [gmailTouched, setGmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const navigate = useNavigate();

  const isNameValid = name.length >= 3;
  const isGmailValid = gmail.includes("@gmail.com");
  const isPasswordValid = password.length > 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isNameValid || !isGmailValid || !isPasswordValid) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, gmail, password }),
      });

      const data = await response.json();
      setResponseMessage(data.message);

      if (data.success) {
        setName("");
        setGmail("");
        setPassword("");
        setNameTouched(false);
        setGmailTouched(false);
        setPasswordTouched(false);

        navigate("/adminhome");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setResponseMessage("An error occurred. Please try again later.");
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
          width: "350px",
          height: "450px",
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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>Admin Login</h1>
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
                Name must be at least 3 characters long.
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
                Gmail must include "@gmail.com"
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
        {responseMessage && <p style={{ color: "#fff" }}>{responseMessage}</p>}

        <button
          onClick={() => navigate("/admingmail")}
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "5px",
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Forget password
        </button>
      </div>
    </div>
  );
}
