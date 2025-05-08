// import React, { useState } from "react";

// export default function Admingmail() {
//   const [gmail, setGmail] = useState("");
//   const [gmailTouched, setGmailTouched] = useState(false);

//   const isGmailValid = gmail.includes("@gmail.com");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isGmailValid) {
//       alert("Please enter a valid Gmail address.");
//       return;
//     }
//     alert(`Gmail submitted successfully!`);
//     console.log({ gmail });
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
//         <h1 style={{ color: "#fff", marginBottom: "20px" }}>ADMIN GMAIL</h1>
//         <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
//           <div style={{ marginBottom: "15px" }}>
//             <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
//               Gmail
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your Gmail"
//               value={gmail}
//               onChange={(e) => setGmail(e.target.value)}
//               onFocus={() => setGmailTouched(true)}
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
//             {gmailTouched && !isGmailValid && (
//               <span style={{ color: "red", fontSize: "12px" }}>
//                 Enter a valid Gmail (must include @gmail.com)
//               </span>
//             )}
//           </div>
//           <button
//             type="submit"
//             disabled={!isGmailValid}
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

















// import React, { useState } from "react";

// export default function Admingmail() {
//   const [gmail, setGmail] = useState("");
//   const [gmailTouched, setGmailTouched] = useState(false);

//   const isGmailValid = gmail.includes("@gmail.com");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isGmailValid) {
//       alert("Please enter a valid Gmail address.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/check-gmail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ gmail }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//       } else {
//         alert(`Error: ${result.error}`);
//       }
//     } catch (error) {
//       console.error("Error submitting Gmail:", error);
//       alert("An error occurred while submitting your Gmail.");
//     }
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
//         <h1 style={{ color: "#fff", marginBottom: "20px" }}>ADMIN GMAIL</h1>
//         <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
//           <div style={{ marginBottom: "15px" }}>
//             <label style={{ color: "#fff", display: "block", marginBottom: "5px" }}>
//               Gmail
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your Gmail"
//               value={gmail}
//               onChange={(e) => setGmail(e.target.value)}
//               onFocus={() => setGmailTouched(true)}
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
//             {gmailTouched && !isGmailValid && (
//               <span style={{ color: "red", fontSize: "12px" }}>
//                 Enter a valid Gmail (must include @gmail.com)
//               </span>
//             )}
//           </div>
//           <button
//             type="submit"
//             disabled={!isGmailValid}
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

export default function Admingmail() {
  const [gmail, setGmail] = useState("");
  const [gmailTouched, setGmailTouched] = useState(false);

  const isGmailValid = gmail.includes("@gmail.com");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isGmailValid) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/check-gmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gmail }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting Gmail:", error);
      alert("An error occurred while submitting your Gmail.");
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
          height: "250px",
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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>ADMIN GMAIL</h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
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
