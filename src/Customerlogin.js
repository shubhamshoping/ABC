// import React, { useState } from "react";
// export default function Customerlogin() {
//  const [name, setName] = useState("");
//  const [gmail, setGmail] = useState("");
//  const [password, setPassword] = useState("");
//  const [nameTouched, setNameTouched] = useState(false);
//  const [gmailTouched, setGmailTouched] = useState(false);
//  const [passwordTouched, setPasswordTouched] = useState(false);
//  const isNameValid = name.length >= 3;
//  const isGmailValid = gmail.includes("@gmail.com");
//  const isPasswordValid = password.length > 6;
//  const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isNameValid) {
//     alert("name is error");
//     return;
//     }
//     if (!isGmailValid) {
//     alert("gmail is error");
//     return;
//     }
//     if (!isPasswordValid) {
//     alert("password is error");
//     return;
//     }
//     alert(`${name} ${gmail} ${password}`);
//  };
//  const nameChange = (e) => {
//  setName(e.target.value);
//  };
//  const gmailChange = (e) => {
//  setGmail(e.target.value);
//  };
//  const passwordChange = (e) => {
//  setPassword(e.target.value);
//  };
//  return (
//     <div>
//     <form onSubmit={handleSubmit}>
//     <div>
//     <input
//     type="text"
//     value={name}
//     onChange={nameChange}
//     onFocus={() => setNameTouched(true)}
//     />
//     {nameTouched && !isNameValid && <span style={{ color: 'red' }}>name is
//    error</span>}
//     </div>
//     <div>
//     <input
//     type="text"
//     value={gmail}
//     onChange={gmailChange}
//     onFocus={() => setGmailTouched(true)}
//     />
//     {gmailTouched && !isGmailValid && <span style={{ color: 'red' }}>gmail is
//    error</span>}
//     </div>
//     <div>
//     <input
//     type="text"
//     value={password}
//     onChange={passwordChange}
//     onFocus={() => setPasswordTouched(true)}
//     />
//     {passwordTouched && !isPasswordValid && <span style={{ color: 'red'
// }}>password is error</span>}
//  </div>
//  <button type="submit" disabled={!isNameValid || !isGmailValid ||
// !isPasswordValid}>
//  submit
//  </button>
//  </form>
//  </div>
//  );
// }










// ......................original code .......................................................






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 

// export default function Customerlogin() {
//   const [name, setName] = useState("");
//   const [gmail, setGmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nameTouched, setNameTouched] = useState(false);
//   const [gmailTouched, setGmailTouched] = useState(false);
//   const [passwordTouched, setPasswordTouched] = useState(false);


//  const navigate = useNavigate();


//   const isNameValid = name.length >= 3;
//   const isGmailValid = gmail.includes("@gmail.com");
//   const isPasswordValid = password.length > 6;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isNameValid || !isGmailValid || !isPasswordValid) {
//       alert("Please fix the errors in the form");
//       return;
//     }

//     const data = { name, gmail, password };

//     try {
//       const response = await fetch("http://localhost:5000/customerlogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert(result.message);
//         navigate("/Productpage");
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while submitting the form.");
//     }
//   };

//   const nameChange = (e) => setName(e.target.value);
//   const gmailChange = (e) => setGmail(e.target.value);
//   const passwordChange = (e) => setPassword(e.target.value);

//   return (
//     <div>
//       <h1>Customer LOGIN </h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={nameChange}
//             onFocus={() => setNameTouched(true)}
//           />
//           {nameTouched && !isNameValid && (
//             <span style={{ color: "red" }}>Name must be at least 3 characters long</span>
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
//             <span style={{ color: "red" }}>Gmail must include '@gmail.com'</span>
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
//             <span style={{ color: "red" }}>Password must be longer than 6 characters</span>
//           )}
//         </div>
//         <button
//           type="submit"
//           disabled={!isNameValid || !isGmailValid || !isPasswordValid}
//         >
//           Submit
//         </button>
//       </form>

//       <button onClick={() => navigate("/Customergmail")}>
//         {/* New code: Navigate to Customergmail when clicked */}
//         Forget password
//       </button>
      
//     </div>
//   );
// }








// .......................perfect original code..............................................




import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Customerlogin() {
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
    if (!isNameValid || !isGmailValid || !isPasswordValid) {
      alert("Please fix the errors in the form");
      return;
    }

    const data = { name, gmail, password };

    try {
      const response = await fetch("http://localhost:5000/customerlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        navigate("/Productpage");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const nameChange = (e) => setName(e.target.value);
  const gmailChange = (e) => setGmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>Customer LOGIN</h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
            placeholder="name"
              type="text"
              value={name}
              onChange={nameChange}
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
                Name must be at least 3 characters long
              </span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
            placeholder="@gmail.com"
              type="text"
              value={gmail}
              onChange={gmailChange}
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
            <input
            placeholder="PASSWORD"
              type="text"
              value={password}
              onChange={passwordChange}
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
                Password must be longer than 6 characters
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

        <button
          onClick={() => navigate("/Customergmail")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "25px",
            background: "rgba(0, 0, 0, 0.7)",
            color: "green",
            fontWeight: "bold",
            cursor: "pointer"
            
          }}
        >
          Forget password
        </button>
      </div>
    </div>
  );
}















