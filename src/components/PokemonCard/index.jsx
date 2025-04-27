import React from "react";
import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <Link to={`/pokemon/${pokemon.name}`}>Ver Detalhes</Link>
    </div>
  );
}

export default PokemonCard;
