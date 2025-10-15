import React, { useState } from "react";
import "./App.css";

const products = [
  { name: "Notebook", price: 100, category: "Stationery" },
  { name: "Bag", price: 500, category: "Bags" },
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Pen", price: 20, category: "Stationery" }
];

const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

const cardColors = {
  "Stationery": "#fb7669",
  "Bags": "#7762a7",
  "Electronics": "#95bb5b"
};

function App() {
  const [category, setCategory] = useState("All");

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  return (
    <div className="container">
      <h1 className="title">Product List with Category Filter</h1>
      <select
        className="dropdown"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="product-list">
        {filtered.map(product => (
          <div
            className="product-card"
            style={{ backgroundColor: cardColors[product.category] || "#ccc" }}
            key={product.name}
          >
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <em>{product.category}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
