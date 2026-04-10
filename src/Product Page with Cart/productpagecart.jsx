import React, { useState } from "react";

const ProductPagelist = () => {
  // Product data
  const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Watch", price: 2000 },
  ];

  // State
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>🛒 Product Page</h2>

      {/* Product List */}
      <div style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={styles.cart}>
        <h2>Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} style={styles.cartItem}>
                  {item.name} - ₹{item.price}
                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <h3>Total: ₹{totalPrice}</h3>
          </>
        )}
      </div>
    </div>
  );
};

// CSS
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  products: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    width: "150px",
  },
  cart: {
    marginTop: "40px",
    borderTop: "2px solid black",
    paddingTop: "20px",
  },
  cartItem: {
    margin: "10px 0",
  },
  removeBtn: {
    marginLeft: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ProductPagelist ;