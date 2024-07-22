let pokemonList = [
  { name: 'Caterpie', height: 6, types: ['monster', 'dragon'] },
  { name: 'Charmeleon', height: 2, types: ['grass', 'monster'] },
  { name: 'Venusaur', height: 3, types: ['bug', 'poison'] }
];

//“Caterpie (height: 6)”.
//Wow, be carreful
for (let i = 0; i < pokemonList[i].height; i++) {
  if (pokemonList[i].height < 3) {
    console.log(pokemonList[i].name + " - is a baby") ;
  } else if (pokemonList[i].height < 5 && pokemonList[i].height > 3) {
    console.log(pokemonList[i].name + " - no worries");
  } else {
    console.log(pokemonList[i].name + " - Wow, be carreful");
  }
}
document.write(console.log);