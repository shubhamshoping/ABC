







// ...................... working perfectly....................................


// // Client-Side Code
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Productpage() {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const navigate = useNavigate();

//   // Fetch product data from the server
//   useEffect(() => {
//     fetch("http://localhost:5000/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   const handleSearch = () => {
//     if (searchTerm === "") {
//       setFilteredProducts(products); // Reset the product list
//     } else {
//       const filtered = products.filter((product) => {
//         return (
//           product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           product.price.toString().includes(searchTerm)
//         );
//       });
//       setFilteredProducts(filtered);
//     }
//   };

//   const handleAddToCart = (product) => {
//     const formData = new FormData();
//     formData.append("productName", product.productName);
//     formData.append("price", product.price);

//     if (product.imageUrl) {
//       fetch(product.imageUrl)
//         .then((res) => res.blob())
//         .then((blob) => {
//           const file = new File([blob], "image.jpg", { type: blob.type });
//           formData.append("imageUrl", file);

//           fetch("http://localhost:5000/addToCart", {
//             method: "POST",
//             body: formData,
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               alert(data.message || `Added ${product.productName} to cart!`);
//             })
//             .catch((error) => console.error("Error adding to cart:", error));
//         });
//     }
//   };

//   const handleBuyNow = (product) => {
//     alert(`Buying ${product.productName} for $${product.price}`);
//   };

//   const handleCustomerLogout = () => {
//     // Delete JWT token from local storage
//     localStorage.removeItem("customerToken");
//     // Navigate to Mainpage component
//     navigate("/Mainpage");
//   };

//   return (
//     <div>
//       <h1>PRODUCT PAGE</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginBottom: "20px",
//           position: "relative",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search products by name or price..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px 20px",
//             borderRadius: "25px",
//             border: "solid red",
//             background: "rgba(255, 255, 255, 0.2)",
//             backdropFilter: "blur(10px)",
//             color: "#333",
//             width: "300px",
//             marginRight: "10px",
//             fontSize: "16px",
//           }}
//         />
//         <button
//           onClick={handleSearch}
//           style={{
//             padding: "10px 20px",
//             borderRadius: "50px",
//             backgroundColor: "#32CD32",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Search
//         </button>
//       </div>

//       <button
//         onClick={handleCustomerLogout}
//         style={{
//           backgroundColor: "#d9534f",
//           color: "white",
//           padding: "10px 15px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginBottom: "20px",
//         }}
//       >
//         Customer Logout
//       </button>

//       {filteredProducts.length > 0 ? (
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "20px",
//             padding: "10px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <div
//               key={product.productId}
//               style={{
//                 minWidth: "200px",
//                 textAlign: "center",
//                 flex: "1 0 calc(14.28% - 20px)",
//                 maxWidth: "14.28%",
//               }}
//             >
//               <h3>{product.productName}</h3>
//               <p>Price: ${product.price}</p>
//               <img
//                 src={product.imageUrl}
//                 alt={product.productName}
//                 style={{ width: "200px", height: "200px", objectFit: "cover" }}
//               />
//               <div style={{ marginTop: "10px" }}>
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   style={{
//                     marginRight: "10px",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                     backgroundColor: "#d90166",
//                     borderRadius: "15px",
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//                 <button
//                   onClick={() => handleBuyNow(product)}
//                   style={{
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                     backgroundColor: "#006400",
//                     borderRadius: "15px",
//                   }}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// }



















// // Client-Side Code
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Productpage() {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const navigate = useNavigate();

//   // Fetch product data from the server
//   useEffect(() => {
//     fetch("http://localhost:5000/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     if (value === "") {
//       // Reset the product list and refresh the page
//       setFilteredProducts(products);
//       window.location.reload();
//     } else {
//       const filtered = products.filter((product) => {
//         return (
//           product.productName.toLowerCase().includes(value.toLowerCase()) ||
//           product.price.toString().includes(value)
//         );
//       });
//       setFilteredProducts(filtered);
//     }
//   };

//   const handleAddToCart = (product) => {
//     const formData = new FormData();
//     formData.append("productName", product.productName);
//     formData.append("price", product.price);

//     if (product.imageUrl) {
//       fetch(product.imageUrl)
//         .then((res) => res.blob())
//         .then((blob) => {
//           const file = new File([blob], "image.jpg", { type: blob.type });
//           formData.append("imageUrl", file);

//           fetch("http://localhost:5000/addToCart", {
//             method: "POST",
//             body: formData,
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               alert(data.message || `Added ${product.productName} to cart!`);
//             })
//             .catch((error) => console.error("Error adding to cart:", error));
//         });
//     }
//   };

//   const handleBuyNow = (product) => {
//     alert(`Buying ${product.productName} for $${product.price}`);
//   };

//   const handleCustomerLogout = () => {
//     // Delete JWT token from local storage
//     localStorage.removeItem("customerToken");
//     // Navigate to Mainpage component
//     navigate("/Mainpage");
//   };

//   return (
//     <div>
//       <h1>PRODUCT PAGE</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginBottom: "20px",
//           position: "relative",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search products by name or price..."
//           value={searchTerm}
//           onChange={handleSearch}
//           style={{
//             padding: "10px 20px",
//             borderRadius: "25px",
//             border: "solid red",
//             background: "rgba(255, 255, 255, 0.2)",
//             backdropFilter: "blur(10px)",
//             color: "#333",
//             width: "300px",
//             marginRight: "10px",
//             fontSize: "16px",
//           }}
//         />
//       </div>

//       <button
//         onClick={handleCustomerLogout}
//         style={{
//           backgroundColor: "#d9534f",
//           color: "white",
//           padding: "10px 15px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginBottom: "20px",
//         }}
//       >
//         Customer Logout
//       </button>

//       {filteredProducts.length > 0 ? (
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "20px",
//             padding: "10px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <div
//               key={product.productId}
//               style={{
//                 minWidth: "200px",
//                 textAlign: "center",
//                 flex: "1 0 calc(14.28% - 20px)",
//                 maxWidth: "14.28%",
//               }}
//             >
//               <h3>{product.productName}</h3>
//               <p>Price: ${product.price}</p>
//               <img
//                 src={product.imageUrl}
//                 alt={product.productName}
//                 style={{ width: "200px", height: "200px", objectFit: "cover" }}
//               />
//               <div style={{ marginTop: "10px" }}>
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   style={{
//                     marginRight: "10px",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                     backgroundColor: "#d90166",
//                     borderRadius: "15px",
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//                 <button
//                   onClick={() => handleBuyNow(product)}
//                   style={{
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                     backgroundColor: "#006400",
//                     borderRadius: "15px",
//                   }}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// }








// Client-Side Code
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Productpage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  // Fetch product data from the server
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      setFilteredProducts(products); // Reset the product list
      window.location.reload(); // Auto-refresh when input is cleared
    } else {
      const filtered = products.filter((product) => {
        return (
          product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.price.toString().includes(searchTerm)
        );
      });
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (product) => {
    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("price", product.price);

    if (product.imageUrl) {
      fetch(product.imageUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "image.jpg", { type: blob.type });
          formData.append("imageUrl", file);

          fetch("http://localhost:5000/addToCart", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data.message || `Added ${product.productName} to cart!`);
            })
            .catch((error) => console.error("Error adding to cart:", error));
        });
    }
  };

  const handleBuyNow = (product) => {
    alert(`Buying ${product.productName} for $${product.price}`);
  };

  const handleCustomerLogout = () => {
    // Delete JWT token from local storage
    localStorage.removeItem("customerToken");
    // Navigate to Mainpage component
    navigate("/Mainpage");
  };

  return (
    <div>
      <h1>PRODUCT PAGE</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="Search products by name or price..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 20px",
            borderRadius: "25px",
            border: "solid red",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            color: "#333",
            width: "300px",
            marginRight: "10px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            borderRadius: "50px",
            backgroundColor: "#32CD32",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <button
        onClick={handleCustomerLogout}
        style={{
          backgroundColor: "#d9534f",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Customer Logout
      </button>

      {filteredProducts.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "10px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.productId}
              style={{
                minWidth: "200px",
                textAlign: "center",
                flex: "1 0 calc(14.28% - 20px)",
                maxWidth: "14.28%",
              }}
            >
              <h3>{product.productName}</h3>
              <p>Price: ${product.price}</p>
              <img
                src={product.imageUrl}
                alt={product.productName}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    backgroundColor: "#d90166",
                    borderRadius: "15px",
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  style={{
                    padding: "5px 10px",
                    cursor: "pointer",
                    backgroundColor: "#006400",
                    borderRadius: "15px",
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
