


// ............................Original code..................................................................




// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Effect6 from "./immage/Effect6.jpg";

// export default function Mainpage() {
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
//       window.location.reload(); // Auto-refresh when input is cleared
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

//   const handleProductClick = () => {
//     navigate("/Customer"); // Navigate to the Customer Login page
//   };

//   return (
//     <div
      

//       style={{
//         backgroundImage: `url(${Effect6})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh", // Changed from height to minHeight for dynamic background height
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "center",
//         color: "white",
//         textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//       }}
      

//     >
//       {/* Glass Effect Navbar */}
//       <nav
//         style={{
//           marginTop: "50px",
//           backdropFilter: "blur(15px)",
//           background: "rgba(255, 255, 255, 0.1)",
//           borderRadius: "12px",
//           padding: "10px 20px",
//           margin: "20px 0",
//           display: "flex",
//           justifyContent: "space-evenly",
//           width: "80%",
//           boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
//         }}
//       >
//         <Link to="/admin">
//           <button style={{ ...buttonStyle, ...redGlow }}>Admin</button>
//         </Link>
//         <Link to="/customer">
//           <button style={{ ...buttonStyle, ...greenGlow }}>Customer</button>
//         </Link>
//         <Link to="/about">
//           <button style={{ ...buttonStyle, ...blueGlow }}>About Us</button>
//         </Link>
//       </nav>

//       <h1>CHANDAN ENTERPRISES</h1>

//       {/* Search Bar */}
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
//               <h3
//                 onClick={handleProductClick}
//                 style={{ cursor: "pointer", color: "white" }}
//               >
//                 {product.productName}
//               </h3>
//               <p
//                 onClick={handleProductClick}
//                 style={{ cursor: "pointer", color: "white" }}
//               >
//                 Price: ${product.price}
//               </p>
//               <img
//                 onClick={handleProductClick}
//                 src={product.imageUrl}
//                 alt={product.productName}
//                 style={{
//                   width: "200px",
//                   height: "200px",
//                   objectFit: "cover",
//                   cursor: "pointer",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products available.</p>
//       )}

      
//     </div>
//   );
// }

// // Button styles
// const buttonStyle = {
//   background: "rgba(255, 255, 255, 0.25)",
//   color: "white",
//   border: "none",
//   borderRadius: "8px",
//   padding: "10px 20px",
//   cursor: "pointer",
//   fontSize: "16px",
//   textShadow: "none",
//   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//   backdropFilter: "blur(5px)",
//   transition: "all 0.3s ease",
// };

// // Mercury light effects
// const redGlow = {
//   boxShadow: "0 0 15px 4px rgba(255, 0, 0, 0.7), 0 0 30px 8px rgba(255, 0, 0, 0.5)",
// };

// const greenGlow = {
//   boxShadow: "0 0 15px 4px rgba(0, 255, 0, 0.7), 0 0 30px 8px rgba(0, 255, 0, 0.5)",
// };

// const blueGlow = {
//   boxShadow: "0 0 15px 4px rgba(0, 183, 255, 0.7), 0 0 30px 8px rgba(0, 183, 255, 0.5)",
// };







// ..........................Original code copy.................................................




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Effect6 from "./immage/Effect6.jpg";

export default function Mainpage() {
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

  const handleProductClick = () => {
    navigate("/Customer"); // Navigate to the Customer Login page
  };

  return (
    <div
      

      style={{
        backgroundImage: `url(${Effect6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Changed from height to minHeight for dynamic background height
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      }}
      

    >
      {/* Glass Effect Navbar */}
      <nav
        style={{
          marginTop: "50px",
          backdropFilter: "blur(15px)",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "10px 20px",
          margin: "20px 0",
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
        }}
      >
        <Link to="/admin">
          <button style={{ ...buttonStyle, ...redGlow }}>Admin</button>
        </Link>
        <Link to="/customer">
          <button style={{ ...buttonStyle, ...greenGlow }}>Customer</button>
        </Link>
        <Link to="/about">
          <button style={{ ...buttonStyle, ...blueGlow }}>About Us</button>
        </Link>
      </nav>

      <h1>CHANDAN ENTERPRISES</h1>

      {/* Search Bar */}
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
              <h3
                onClick={handleProductClick}
                style={{ cursor: "pointer", color: "white" }}
              >
                {product.productName}
              </h3>
              <p
                onClick={handleProductClick}
                style={{ cursor: "pointer", color: "white" }}
              >
                Price: ${product.price}
              </p>
              <img
                onClick={handleProductClick}
                src={product.imageUrl}
                alt={product.productName}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}

      
    </div>
  );
}

// Button styles
const buttonStyle = {
  background: "rgba(255, 255, 255, 0.25)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
  textShadow: "none",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(5px)",
  transition: "all 0.3s ease",
};

// Mercury light effects
const redGlow = {
  boxShadow: "0 0 15px 4px rgba(255, 0, 0, 0.7), 0 0 30px 8px rgba(255, 0, 0, 0.5)",
};

const greenGlow = {
  boxShadow: "0 0 15px 4px rgba(0, 255, 0, 0.7), 0 0 30px 8px rgba(0, 255, 0, 0.5)",
};

const blueGlow = {
  boxShadow: "0 0 15px 4px rgba(0, 183, 255, 0.7), 0 0 30px 8px rgba(0, 183, 255, 0.5)",
};











































