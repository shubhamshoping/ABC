import React, { useEffect, useState } from "react";

export default function Addtocartpage() {
  const [products, setProducts] = useState([]);

  // Fetch product data from the server
  useEffect(() => {
    fetch("http://localhost:5000/getCartProducts")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Delete product by image URL
  const handleDelete = (imageUrl) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`http://localhost:5000/deleteProduct`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          setProducts(products.filter((product) => product.imageUrl !== imageUrl));
        })
        .catch((error) => console.error("Error deleting product:", error));
    }
  };

  return (
    <div>
      <h1>Cart Products</h1>
      <table border="1" width="100%" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.imageUrl}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(product.imageUrl)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
