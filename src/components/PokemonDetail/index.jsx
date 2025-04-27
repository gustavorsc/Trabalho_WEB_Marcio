import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../../Services/Api";


function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonDetail(id).then(setPokemon);
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="pokemon-detail" style={{ backgroundColor: pokemon.typeColor }}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Tipo: {pokemon.type}</p>
      <p>Altura: {pokemon.height} m</p>
      <p>Peso: {pokemon.weight} kg</p>
    </div>
  );
}

export default PokemonDetail;
