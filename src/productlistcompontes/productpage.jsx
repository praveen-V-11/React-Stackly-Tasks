import React, { useState } from "react";
import ProductCard from "./productCardpage";

function ProductPage() {
  const [category, setCategory] = useState("all");

  const products = [
    { id: 1, name: "Shoes", price: 1000, category: "fashion" },
    { id: 2, name: "T-Shirt", price: 500, category: "fashion" },
    { id: 3, name: "Mobile", price: 15000, category: "electronics" },
    { id: 4, name: "Laptop", price: 50000, category: "electronics" }
  ];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const handleAdd = (name) => {
    alert(`${name} added to cart`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Page</h1>

      <button onClick={() => setCategory("all")}>All</button>
      <button onClick={() => setCategory("fashion")}>Fashion</button>
      <button onClick={() => setCategory("electronics")}>
        Electronics
      </button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            onAdd={() => handleAdd(product.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;