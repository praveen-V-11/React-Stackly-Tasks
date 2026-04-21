import { useState } from "react";
import "../styles/productsearchpage.css"
function ProductPageSearch() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const products = [
    
  { id: 1, name: "Shoes", price: 1500 },
  { id: 2, name: "T-shirt", price: 500 },
  { id: 3, name: "Watch", price: 2000 },
  { id: 4, name: "Cap", price: 300 },
  { id: 5, name: "Jeans", price: 1800 },
  { id: 6, name: "Jacket", price: 3500 },
  { id: 7, name: "Sunglasses", price: 1200 },
  { id: 8, name: "Backpack", price: 2200 },
  { id: 9, name: "Wallet", price: 800 },
  { id: 10, name: "Belt", price: 600 },
  { id: 11, name: "Sneakers", price: 2500 },
  { id: 12, name: "Hoodie", price: 2700 },
  { id: 13, name: "Formal Shirt", price: 1400 },
  { id: 14, name: "Shorts", price: 900 },
  { id: 15, name: "Slippers", price: 400 },
  { id: 16, name: "Sports Watch", price: 3200 },
  { id: 17, name: "Laptop Bag", price: 2800 },
  { id: 18, name: "Perfume", price: 1500 },
  { id: 19, name: "Gym Gloves", price: 700 },
  { id: 20, name: "Water Bottle", price: 300 }
  ];


  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : product.price > 1000;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container">
      <h2>Product Page</h2>


      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

   
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="above">Above ₹1000</option>
      </select>


      <div className="product-list">
  {filteredProducts.length === 0 ? (
    <p className="no-data">No products found 😢</p>
  ) : (
    filteredProducts.map((p) => (
      <div key={p.id} className="card">
        <h3>{p.name}</h3>
        <p>₹{p.price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    ))
  )}
</div>
    </div>
  );
}

export default ProductPageSearch;