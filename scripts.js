let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Caterpie', height: 6, types: ['monster', 'dragon'] },
    { name: 'Charmeleon', height: 2, types: ['grass', 'monster'] },
    { name: 'Venusaur', height: 3, types: ['bug', 'poison'] }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

  return {
    getAll: getAll,
    add: add
  };
})();

function myLoopFunction(pokemon) {
  if (pokemon.height < 3) {
    document.write(pokemon.name + " - is a baby<br>");
  } else if (pokemon.height <= 5 && pokemon.height >= 3) {
    document.write(pokemon.name + " - no worries<br>");
  } else {
    document.write(pokemon.name + " - Wow, be careful<br>");
  }
}

pokemonRepository.getAll().forEach(myLoopFunction);