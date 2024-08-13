let pokemonRepository = function () { let t = []; function e() { return t } function n(e) { t.push(e) } function o(t) { return fetch(t.detailsUrl).then(function (t) { return t.json() }).then(function (e) { t.imageUrl = e.sprites.front_default, t.height = e.height, t.types = e.types }).catch(function (t) { console.error(t) }) } function i(t) { o(t).then(function () { var e, n, o; let i, r, l; e = t.name, n = `Height: ${t.height}`, o = t.imageUrl, i = document.querySelector(".modal-title"), document.querySelector(".modal-body"), r = document.querySelector(".pokemon-image"), l = document.querySelector(".pokemon-details"), i.innerText = e, r.src = o, l.innerText = n }) } return { getAll: e, add: n, addListItem: function t(e) { let n = document.querySelector(".pokemon-list"), o = document.createElement("div"); o.classList.add("list-group-item", "list-group-item-action"); let r = document.createElement("button"); r.innerText = e.name, r.classList.add("btn", "btn-fixed-width", "btn-custom-color"), r.setAttribute("data-toggle", "modal"), r.setAttribute("data-target", "#pokemonModal"), r.addEventListener("click", function () { i(e) }), o.appendChild(r), n.appendChild(o) }, loadList: function t() { return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function (t) { return t.json() }).then(function (t) { t.results.forEach(function (t) { let e = { name: t.name, detailsUrl: t.url }; n(e), console.log(e) }) }).catch(function (t) { console.error(t) }) }, loadDetails: o, showDetails: i } }(); pokemonRepository.loadList().then(function () { pokemonRepository.getAll().forEach(function (t) { pokemonRepository.addListItem(t) }) });