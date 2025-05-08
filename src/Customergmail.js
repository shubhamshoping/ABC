// import React, { useState } from "react";

// export default function Customergmail() {
//   const [gmail, setGmail] = useState("");
//   const [gmailTouched, setGmailTouched] = useState(false);
//   const isGmailValid = gmail.includes("@gmail.com");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isGmailValid) {
//       alert("Gmail is invalid");
//       return;
//     }
//     alert(`Gmail: ${gmail}`);
//   };

//   const gmailChange = (e) => {
//     setGmail(e.target.value);
//   };

//   return (
//     <div>
//         <h1>Customer GMAIL</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={gmail}
//             onChange={gmailChange}
//             onFocus={() => setGmailTouched(true)}
//           />
//           {gmailTouched && !isGmailValid && (
//             <span style={{ color: "red" }}>Gmail is invalid</span>
//           )}
//         </div>
//         <button type="submit" disabled={!isGmailValid}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }




















// ..................................original code.......................................






// import React, { useState } from "react";

// export default function Customergmail() {
//   const [gmail, setGmail] = useState("");
//   const [gmailTouched, setGmailTouched] = useState(false);
//   const isGmailValid = gmail.includes("@gmail.com");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isGmailValid) {
//       alert("Gmail is invalid");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/sendCustomerLink", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ gmail }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       alert("An error occurred: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Customer GMAIL</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={gmail}
//             onChange={(e) => setGmail(e.target.value)}
//             onFocus={() => setGmailTouched(true)}
//           />
//           {gmailTouched && !isGmailValid && (
//             <span style={{ color: "red" }}>Gmail is invalid</span>
//           )}
//         </div>
//         <button type="submit" disabled={!isGmailValid}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }















import React, { useState } from "react";

export default function Customergmail() {
  const [gmail, setGmail] = useState("");
  const [gmailTouched, setGmailTouched] = useState(false);
  const isGmailValid = gmail.includes("@gmail.com");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isGmailValid) {
      alert("Gmail is invalid");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/sendCustomerLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gmail }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
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
          height: "300px",
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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>Customer GMAIL</h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
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
                Gmail is invalid
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!isGmailValid}
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
