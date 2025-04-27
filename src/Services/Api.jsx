export const fetchPokemonList = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  
  // Agora buscar os detalhes de cada Pokémon para pegar a imagem
  const pokemonsWithImages = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();
      
      return {
        name: pokemon.name,
        image: details.sprites.front_default, // Aqui pega a imagem
        id: details.id,
      };
    })
  );

  return pokemonsWithImages;
};

  
  export const fetchPokemonDetail = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return {
      name: data.name,
      image: data.sprites.front_default,
      type: data.types[0].type.name,
      typeColor: getTypeColor(data.types[0].type.name),
      height: data.height / 10,
      weight: data.weight / 10,
    };
  };
  
  const getTypeColor = (type) => {
    const colors = {
      grass: "#7AC74C",
      fire: "#EE8130",
      water: "#6390F0",
      normal: "#A8A77A",
      electric: "#F7D02C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying:"#A98FF3",
      psychic:"#F95587",
      bug:"#A6B91A",
      rock:"#B6A136",
      ghost:"#735797",
      dragon:"#6F35FC",
      dark:"#705746",
      steel:"#B7B7CE",
      fairy:"#D685AD"
    };
    return colors[type] || "#ffffff"; // Default white if type is not found
  };
  