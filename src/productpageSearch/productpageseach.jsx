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
        {filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPageSearch;