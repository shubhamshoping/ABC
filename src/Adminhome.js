
// ...................................... Main Original code perfect......................................................



// import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
// import axios from "axios"; // Import axios
// import { useNavigate } from "react-router-dom"; 

// export default function Adminhome() {

//   const [image, setImage] = useState(null);
//   const [price, setPrice] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productId, setProductId] = useState("");
//   const [products, setProducts] = useState([]);
//   const [editingId, setEditingId] = useState(null); // Track the product being edited
//  const navigate = useNavigate();


//   // Fetch product data and the next productId on component mount
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         const productIdResponse = await axios.get("http://localhost:5000/nextProductId");
//         setProductId(productIdResponse.data.productId);

//         const productsResponse = await axios.get("http://localhost:5000/products");
//         setProducts(productsResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         alert("Failed to fetch initial data");
//       }
//     };

//     fetchInitialData();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e, setter) =>
//     setter(e.target.type === "file" ? URL.createObjectURL(e.target.files[0]) : e.target.value);

//   // Handle form submission to add a new product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image || !price || !productName) {
//       return alert("Please fill all fields.");
//     }

//     const formData = new FormData();
//     formData.append("image", e.target.image.files[0]);
//     formData.append("price", price);
//     formData.append("productName", productName);

//     try {
//       await axios.post("http://localhost:5000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Product added successfully!");
//       window.location.reload();  // Auto refresh after successful submit

//       // Reset form fields
//       setImage(null);
//       setPrice("");
//       setProductName("");
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product");
//     }
//   };

//   // Handle edit and update of a product
//   const handleEdit = (product) => {
//     setEditingId(product.productId);
//     setProductName(product.productName);
//     setPrice(product.price);
//     setImage(product.imageUrl);
//   };

//   const handleUpdate = async (id) => {
//     const formData = new FormData();
//     formData.append("productName", productName);
//     formData.append("price", price);
//     if (image && image instanceof File) {
//       formData.append("image", image);
//     }

//     try {
//       await axios.put(`http://localhost:5000/products/${id}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Product updated successfully!");
//       window.location.reload();  // Auto refresh after successful update

//       setEditingId(null); // Exit edit mode
//     } catch (error) {
//       console.error("Error updating product:", error);
//       alert("Failed to update product");
//     }
//   };

//   // Handle deletion of a product
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/products/${id}`);
//       alert("Product and image deleted successfully!");
//       window.location.reload();  // Auto refresh after successful delete
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       alert("Failed to delete product");
//     }
//   };


// // Handle Logout (Token deletion)
// const handleLogout = () => {
//   localStorage.removeItem("jwtToken"); // Delete the token from localStorage
//   window.location.href = "/Mainpage"; // Navigate to Mainpage component
// };

// const handledelete = () => {
//   // Navigate to the Admindelete component
//   navigate("/admindelete");
// };

//  return (
//     <div style={{ display: "flex", justifyContent: "space-between", gap: "50px", padding: "20px" }}>
//       {/* Product Form */}
//       <div style={{ flex: 1 }}>
//         <h1 style={{ color: "#333", textAlign: "center" }}>ADMIN HOME</h1>

//         <form onSubmit={handleSubmit} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
//           <div>
//             <input
//               type="text"
//               value={productId}
//               readOnly
//               placeholder="Product ID"
//               style={{ marginBottom: "10px", cursor: "not-allowed", backgroundColor: "#f0f0f0", width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
//             />
//           </div>
//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               name="image"
//               onChange={(e) => handleChange(e, setImage)}
//               disabled={editingId !== null} // Disable image input if editing
//               style={{ padding: "10px", width: "100%" }}
//             />
//             {image && <img src={image} alt="Selected" style={{ width: 100, height: 100, marginTop: 10 }} />}
//           </div>
//           <div>
//             <input
//               type="text"
//               value={price}
//               onChange={(e) => handleChange(e, setPrice)}
//               placeholder="Enter price"
//               disabled={editingId !== null} // Disable price input if editing
//               style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               value={productName}
//               onChange={(e) => handleChange(e, setProductName)}
//               placeholder="Enter product name"
//               disabled={editingId !== null} // Disable product name input if editing
//               style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
//             />
//           </div>
//           <button type="submit" disabled={editingId !== null} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px" }}>
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Product Table */}
//       <div style={{ flex: 2, overflowY: "auto", maxHeight: "600px", backgroundColor: "rgba(135, 206, 250, 0.7)", padding: "20px", borderRadius: "8px" }}>
//         <h2 style={{ textAlign: "center" }}>Product List</h2>
//         {products.length === 0 ? (
//           <p style={{ textAlign: "center", color: "#333" }}>No products available</p>
//         ) : (
//           <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Product ID</th>
//                 <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Product Name</th>
//                 <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Price</th>
//                 <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Image</th>
//                 <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.productId}>
//                   <td style={{ padding: "10px" }}>{product.productId}</td>
//                   <td style={{ padding: "10px" }}>
//                     {editingId === product.productId ? (
//                       <input
//                         type="text"
//                         value={productName}
//                         onChange={(e) => setProductName(e.target.value)}
//                         style={{ padding: "5px", width: "100%" }}
//                       />
//                     ) : (
//                       product.productName
//                     )}
//                   </td>
//                   <td style={{ padding: "10px" }}>
//                     {editingId === product.productId ? (
//                       <input
//                         type="text"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         style={{ padding: "5px", width: "100%" }}
//                       />
//                     ) : (
//                       product.price
//                     )}
//                   </td>
//                   <td style={{ padding: "10px" }}>
//                     {editingId === product.productId ? (
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setImage(e.target.files[0])}
//                         style={{ padding: "5px", width: "100%" }}
//                       />
//                     ) : (
//                       <img
//                         src={product.imageUrl}
//                         alt={product.productName}
//                         style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                       />
//                     )}
//                   </td>
//                   <td style={{ padding: "10px" }}>
//                     {editingId === product.productId ? (
//                       <button onClick={() => handleUpdate(product.productId)} style={{ backgroundColor: "#4CAF50", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}>
//                         Save
//                       </button>
//                     ) : (
//                       <button onClick={() => handleEdit(product)} style={{ backgroundColor: "#4CAF50", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}>
//                         Edit
//                       </button>
//                     )}
//                     <button onClick={() => handleDelete(product.productId)} style={{ backgroundColor: "#ff6347", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px", marginLeft: "5px" }}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>


// <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
//   {/* Logout Button */}
//   <button 
//     onClick={handleLogout} 
//     style={{
//       backgroundColor: "#f44336", 
//       color: "white", 
//       padding: "5px 10px", 
//       border: "none", 
//       borderRadius: "15px", 
//       fontSize: "15px", 
//       cursor: "pointer", 
//       height: "40px", 
//       marginBottom: "10px", // Space between the buttons
//       boxShadow: "0 0 15px 5px rgba(244, 67, 54, 0.8)", // Glowing effect
//       textShadow: "0 0 10px rgba(244, 67, 54, 0.8)", // Glowing text effect
//       transition: "all 0.3s ease-in-out",
//     }}
//     onMouseOver={(e) => e.target.style.boxShadow = "0 0 25px 8px rgba(244, 67, 54, 1)"} // Brighter glow on hover
//     onMouseOut={(e) => e.target.style.boxShadow = "0 0 15px 5px rgba(244, 67, 54, 0.8)"} // Reset glow when not hovering
//   >
//     Logout
//   </button>

//   {/* Delete admin account Button */}
//   <button 
//     onClick={handledelete} 
//     style={{
//       width: "auto", 
//       backgroundColor: "#006400", 
//       color: "white", 
//       padding: "5px 10px", 
//       border: "none", 
//       borderRadius: "15px", 
//       fontSize: "15px", 
//       cursor: "pointer", 
//       height: "40px", 
//       boxShadow: "0 0 15px 5px rgba(0, 100, 0, 0.8)", // Glowing effect
//       textShadow: "0 0 10px rgba(0, 100, 0, 0.8)", // Glowing text effect
//       transition: "all 0.3s ease-in-out",
//     }}
//     onMouseOver={(e) => e.target.style.boxShadow = "0 0 25px 8px rgba(0, 100, 0, 1)"} // Brighter glow on hover
//     onMouseOut={(e) => e.target.style.boxShadow = "0 0 15px 5px rgba(0, 100, 0, 0.8)"} // Reset glow when not hovering
//   >
//     Delete admin account
//   </button>
// </div>


// <button onClick={() => navigate("/Addtocartpage")}  style={{
//       width: "180px", 
//       backgroundColor: "red", 
//       color: "white", 
//       padding: "15px 10px", 
//       border: "none", 
//       borderRadius: "15px", 
//       fontSize: "15px", 
//       cursor: "pointer", 
//       height: "50px", 
//       boxShadow: "0 0 15px 5px rgba(0, 100, 0, 0.8)", // Glowing effect
//       textShadow: "0 0 10px rgba(0, 100, 0, 0.8)", // Glowing text effect
//       transition: "all 0.3s ease-in-out",
//       marginTop:"150px",
//     position:"absolute",
//     marginLeft:"1300px"

//     }} >
// Add to Cart page
// </button>

//     </div>
//   );
// }













// ....................................Original code................................................................












import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; 

export default function Adminhome() {

  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null); // Track the product being edited
 const navigate = useNavigate();


  // Fetch product data and the next productId on component mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const productIdResponse = await axios.get("http://localhost:5000/nextProductId");
        setProductId(productIdResponse.data.productId);

        const productsResponse = await axios.get("http://localhost:5000/products");
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch initial data");
      }
    };

    fetchInitialData();
  }, []);

  // Handle form input changes
  const handleChange = (e, setter) =>
    setter(e.target.type === "file" ? URL.createObjectURL(e.target.files[0]) : e.target.value);

  // Handle form submission to add a new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !price || !productName) {
      return alert("Please fill all fields.");
    }

    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    formData.append("price", price);
    formData.append("productName", productName);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product added successfully!");
      window.location.reload();  // Auto refresh after successful submit

      // Reset form fields
      setImage(null);
      setPrice("");
      setProductName("");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  // Handle edit and update of a product
  const handleEdit = (product) => {
    setEditingId(product.productId);
    setProductName(product.productName);
    setPrice(product.price);
    setImage(product.imageUrl);
  };

  const handleUpdate = async (id) => {
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    if (image && image instanceof File) {
      formData.append("image", image);
    }

    try {
      await axios.put(`http://localhost:5000/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product updated successfully!");
      window.location.reload();  // Auto refresh after successful update

      setEditingId(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    }
  };

  // Handle deletion of a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      alert("Product and image deleted successfully!");
      window.location.reload();  // Auto refresh after successful delete
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
    }
  };


// Handle Logout (Token deletion)
const handleLogout = () => {
  localStorage.removeItem("jwtToken"); // Delete the token from localStorage
  window.location.href = "/Mainpage"; // Navigate to Mainpage component
};

const handledelete = () => {
  // Navigate to the Admindelete component
  navigate("/admindelete");
};

 return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "50px", padding: "20px" }}>
      {/* Product Form */}
      <div style={{ flex: 1 }}>
        <h1 style={{ color: "#333", textAlign: "center" }}>ADMIN HOME</h1>

        <form onSubmit={handleSubmit} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <div>
            <input
              type="text"
              value={productId}
              readOnly
              placeholder="Product ID"
              style={{ marginBottom: "10px", cursor: "not-allowed", backgroundColor: "#f0f0f0", width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => handleChange(e, setImage)}
              disabled={editingId !== null} // Disable image input if editing
              style={{ padding: "10px", width: "100%" }}
            />
            {image && <img src={image} alt="Selected" style={{ width: 100, height: 100, marginTop: 10 }} />}
          </div>
          <div>
            <input
              type="text"
              value={price}
              onChange={(e) => handleChange(e, setPrice)}
              placeholder="Enter price"
              disabled={editingId !== null} // Disable price input if editing
              style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>
          <div>
            <input
              type="text"
              value={productName}
              onChange={(e) => handleChange(e, setProductName)}
              placeholder="Enter product name"
              disabled={editingId !== null} // Disable product name input if editing
              style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>
          <button type="submit" disabled={editingId !== null} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "10px" }}>
            Submit
          </button>
        </form>
      </div>

      {/* Product Table */}
      <div style={{ flex: 2, overflowY: "auto", maxHeight: "600px", backgroundColor: "rgba(135, 206, 250, 0.7)", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ textAlign: "center" }}>Product List</h2>
        {products.length === 0 ? (
          <p style={{ textAlign: "center", color: "#333" }}>No products available</p>
        ) : (
          <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Product ID</th>
                <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Product Name</th>
                <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Price</th>
                <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Image</th>
                <th style={{ textAlign: "left", backgroundColor: "#f2f2f2", color: "#333", padding: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId}>
                  <td style={{ padding: "10px" }}>{product.productId}</td>
                  <td style={{ padding: "10px" }}>
                    {editingId === product.productId ? (
                      <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        style={{ padding: "5px", width: "100%" }}
                      />
                    ) : (
                      product.productName
                    )}
                  </td>
                  <td style={{ padding: "10px" }}>
                    {editingId === product.productId ? (
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{ padding: "5px", width: "100%" }}
                      />
                    ) : (
                      product.price
                    )}
                  </td>
                  <td style={{ padding: "10px" }}>
                    {editingId === product.productId ? (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        style={{ padding: "5px", width: "100%" }}
                      />
                    ) : (
                      <img
                        src={product.imageUrl}
                        alt={product.productName}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    )}
                  </td>
                  <td style={{ padding: "10px" }}>
                    {editingId === product.productId ? (
                      <button onClick={() => handleUpdate(product.productId)} style={{ backgroundColor: "#4CAF50", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}>
                        Save
                      </button>
                    ) : (
                      <button onClick={() => handleEdit(product)} style={{ backgroundColor: "#4CAF50", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}>
                        Edit
                      </button>
                    )}
                    <button onClick={() => handleDelete(product.productId)} style={{ backgroundColor: "#ff6347", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px", marginLeft: "5px" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>


<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
  {/* Logout Button */}
  <button 
    onClick={handleLogout} 
    style={{
      backgroundColor: "#f44336", 
      color: "white", 
      padding: "5px 10px", 
      border: "none", 
      borderRadius: "15px", 
      fontSize: "15px", 
      cursor: "pointer", 
      height: "40px", 
      marginBottom: "10px", // Space between the buttons
      boxShadow: "0 0 15px 5px rgba(244, 67, 54, 0.8)", // Glowing effect
      textShadow: "0 0 10px rgba(244, 67, 54, 0.8)", // Glowing text effect
      transition: "all 0.3s ease-in-out",
    }}
    onMouseOver={(e) => e.target.style.boxShadow = "0 0 25px 8px rgba(244, 67, 54, 1)"} // Brighter glow on hover
    onMouseOut={(e) => e.target.style.boxShadow = "0 0 15px 5px rgba(244, 67, 54, 0.8)"} // Reset glow when not hovering
  >
    Logout
  </button>

  {/* Delete admin account Button */}
  <button 
    onClick={handledelete} 
    style={{
      width: "auto", 
      backgroundColor: "#006400", 
      color: "white", 
      padding: "5px 10px", 
      border: "none", 
      borderRadius: "15px", 
      fontSize: "15px", 
      cursor: "pointer", 
      height: "40px", 
      boxShadow: "0 0 15px 5px rgba(0, 100, 0, 0.8)", // Glowing effect
      textShadow: "0 0 10px rgba(0, 100, 0, 0.8)", // Glowing text effect
      transition: "all 0.3s ease-in-out",
    }}
    onMouseOver={(e) => e.target.style.boxShadow = "0 0 25px 8px rgba(0, 100, 0, 1)"} // Brighter glow on hover
    onMouseOut={(e) => e.target.style.boxShadow = "0 0 15px 5px rgba(0, 100, 0, 0.8)"} // Reset glow when not hovering
  >
    Delete admin account
  </button>
</div>


<button onClick={() => navigate("/Addtocartpage")}  style={{
      width: "180px", 
      backgroundColor: "red", 
      color: "white", 
      padding: "15px 10px", 
      border: "none", 
      borderRadius: "15px", 
      fontSize: "15px", 
      cursor: "pointer", 
      height: "50px", 
      boxShadow: "0 0 15px 5px rgba(0, 100, 0, 0.8)", // Glowing effect
      textShadow: "0 0 10px rgba(0, 100, 0, 0.8)", // Glowing text effect
      transition: "all 0.3s ease-in-out",
      marginTop:"150px",
    position:"absolute",
    marginLeft:"1300px"

    }} >
Add to Cart page
</button>

    </div>
  );
}

























































