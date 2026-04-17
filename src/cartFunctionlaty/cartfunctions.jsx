import React, { useState } from "react";
import "../styles/cartfunctions.css";

const CartPage = () => {
  const products = [
    { id: 1, name: "Burger", price: 120 },
    { id: 2, name: "Pizza", price: 250 },
    { id: 3, name: "Pasta", price: 180 },
    { id: 4, name: "Sandwich", price: 90 },
  ];

  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <h1>🛒 Product Page</h1>

      {/* Product List */}
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>
                  {item.name} - ₹{item.price}
                </span>
                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}

            <h3>Total: ₹{totalPrice}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;