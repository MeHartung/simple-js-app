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
  
    function showDetails(pokemon) {
      console.log(pokemon);
    }
  
    function addListItem(pokemon) {
      let ulElement = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
  
      button.innerText = pokemon.name;
      button.classList.add('pokemon-button');
  
      button.addEventListener('click', function() {
        showDetails(pokemon);
      });
  
      listItem.appendChild(button);
      ulElement.appendChild(listItem);
    }
  
    return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
    };
  })();
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });