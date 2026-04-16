import React from "react";
import "../styles/productpage.css"

const ProductPage = () => {
  const products = [
    { id: 1, name: "Pizza", price: 200 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 180 },
    { id: 4, name: "Fries", price: 90 }
  ];

  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };

  return (
    <div className="container">
      <h2>Product Page</h2>

      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;