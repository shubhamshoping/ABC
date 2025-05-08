


// ..................original code.................................................................









// import { useState } from "react"

// export default function Admindelete() {
//   const [name, setName] = useState("")
//   const [gmail, setGmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [nameTouched, setNameTouched] = useState(false)
//   const [gmailTouched, setGmailTouched] = useState(false)
//   const [passwordTouched, setPasswordTouched] = useState(false)
//   const [message, setMessage] = useState("")

//   const isNameValid = name.length >= 3
//   const isGmailValid = gmail.includes("@gmail.com")
//   const isPasswordValid = password.length > 6

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!isNameValid) {
//       alert("name is error")
//       return
//     }
//     if (!isGmailValid) {
//       alert("gmail is error")
//       return
//     }
//     if (!isPasswordValid) {
//       alert("password is error")
//       return
//     }

//     try {
//       const response = await fetch("http://localhost:5000/delete-admin", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           gmail,
//           password,
//         }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setMessage(data.message)
//         // Clear form after successful deletion
//         setName("")
//         setGmail("")
//         setPassword("")
//       } else {
//         setMessage(data.error || "Failed to delete admin")
//       }
//     } catch (error) {
//       setMessage("Error connecting to server")
//       console.error("Error:", error)
//     }
//   }

//   const nameChange = (e) => {
//     setName(e.target.value)
//   }
//   const gmailChange = (e) => {
//     setGmail(e.target.value)
//   }
//   const passwordChange = (e) => {
//     setPassword(e.target.value)
//   }

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1>AdminDelete</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={nameChange}
//             onFocus={() => setNameTouched(true)}
//             placeholder="Enter name"
//             className="w-full p-2 border rounded"
//           />
//           {nameTouched && !isNameValid && <span className="text-red-500">name is error</span>}
//         </div>
//         <div>
//           <input
//             type="text"
//             value={gmail}
//             onChange={gmailChange}
//             onFocus={() => setGmailTouched(true)}
//             placeholder="Enter gmail"
//             className="w-full p-2 border rounded"
//           />
//           {gmailTouched && !isGmailValid && <span className="text-red-500">gmail is error</span>}
//         </div>
//         <div>
//           <input
//             type="password"
//             value={password}
//             onChange={passwordChange}
//             onFocus={() => setPasswordTouched(true)}
//             placeholder="Enter password"
//             className="w-full p-2 border rounded"
//           />
//           {passwordTouched && !isPasswordValid && <span className="text-red-500">password is error</span>}
//         </div>
//         <button
//           type="submit"
//           disabled={!isNameValid || !isGmailValid || !isPasswordValid}
//           className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
//         >
//           Delete Admin
//         </button>
//         {message && <div className="mt-4 text-center font-medium">{message}</div>}
//       </form>
//     </div>
//   )
// }














import { useState } from "react"

export default function Admindelete() {
  const [name, setName] = useState("")
  const [gmail, setGmail] = useState("")
  const [password, setPassword] = useState("")
  const [nameTouched, setNameTouched] = useState(false)
  const [gmailTouched, setGmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [message, setMessage] = useState("")

  const isNameValid = name.length >= 3
  const isGmailValid = gmail.includes("@gmail.com")
  const isPasswordValid = password.length > 6

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isNameValid) {
      alert("name is error")
      return
    }
    if (!isGmailValid) {
      alert("gmail is error")
      return
    }
    if (!isPasswordValid) {
      alert("password is error")
      return
    }

    try {
      const response = await fetch("http://localhost:5000/delete-admin", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          gmail,
          password,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        // Clear form after successful deletion
        setName("")
        setGmail("")
        setPassword("")
      } else {
        setMessage(data.error || "Failed to delete admin")
      }
    } catch (error) {
      setMessage("Error connecting to server")
      console.error("Error:", error)
    }
  }

  const nameChange = (e) => {
    setName(e.target.value)
  }
  const gmailChange = (e) => {
    setGmail(e.target.value)
  }
  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>Admin Delete</h1>
        <form style={{ width: "100%", textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              value={name}
              onChange={nameChange}
              onFocus={() => setNameTouched(true)}
              placeholder="Enter name"
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
              <span style={{ color: "red", fontSize: "12px" }}>Name must be at least 3 characters long.</span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              value={gmail}
              onChange={gmailChange}
              onFocus={() => setGmailTouched(true)}
              placeholder="Enter Gmail"
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
              <span style={{ color: "red", fontSize: "12px" }}>Gmail must include "@gmail.com".</span>
            )}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              value={password}
              onChange={passwordChange}
              onFocus={() => setPasswordTouched(true)}
              placeholder="Enter password"
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
            Delete Admin
          </button>
          {message && <div style={{ color: "#fff", marginTop: "15px" }}>{message}</div>}
        </form>
      </div>
    </div>
  )
} 
