let pokemonList = [
  { name: 'Caterpie', height: 6, types: ['monster', 'dragon'] },
  { name: 'Charmeleon', height: 2, types: ['grass', 'monster'] },
  { name: 'Venusaur', height: 3, types: ['bug', 'poison'] }
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 3) {
    document.write(pokemonList[i].name + " - is a baby<br>");
  } else if (pokemonList[i].height < 5 && pokemonList[i].height > 3) {
    document.write(pokemonList[i].name + " - no worries<br>");
  } else {
    document.write(pokemonList[i].name + " - Wow, be careful<br>");
  }
}