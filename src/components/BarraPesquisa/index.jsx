// src/components/SearchBar.js
import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            padding: "10px 40px 10px 15px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <FaSearch
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#999",
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
