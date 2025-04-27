import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <FaHome /> Home
        </Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
