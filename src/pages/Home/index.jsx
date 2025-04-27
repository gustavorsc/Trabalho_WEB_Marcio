// src/pages/Home.js
import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import SearchBar from "../../components/BarraPesquisa"; 
import { fetchPokemonList } from "../../Services/Api";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPokemonList().then(setPokemons);
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Pokédex</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="pokemon-list">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        ) : (
          <p>Nenhum Pokémon encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
