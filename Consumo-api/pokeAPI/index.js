const poke = document.getElementById("pokemons");
const pokeInput = document.getElementById("pokeInput");
const searchPoke = document.getElementById("searchPoke");
const btnFavorites = document.getElementById("btnFavorites");
const renderFavorites = document.getElementById("renderFavorites");

let favoritePokemons = [];
let currentPokemon = null;

async function getPokemon() {
  const name = pokeInput.value.toLowerCase();

  if (!name) {
    poke.innerHTML = "Digite um nome";
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    const pokemon = data;
    currentPokemon = pokemon;
    const types = data.types.map((t) => t.type.name).join(" / ");

    poke.innerHTML = `
    <div class="flex justify-center flex-col">
        <h2 class=""><strong>Nome:</strong> <span class="font-mono text-indigo-600">${data.name}</span></h2>
        <img src="${data.sprites.front_default}">
        <p><strong>Tipo:</strong> <span class="font-mono text-indigo-600">${types}</span></p>
        <button class="border bg-indigo-600" onclick="addFavorites()">Favoritar</button>
    </div>
    `;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function showFavorites() {
  const render = favoritePokemons.map((pokemon) => {
    return `
    <div class="flex justify-center flex-col">
        <h2 class=""><strong>Nome:</strong> <span class="font-mono text-indigo-600">${pokemon.name}</span></h2>
        <p><strong>Tipo:</strong> ${pokemon.types.map((t) => t.type.name).join(" / ")}</p>
        <img src="${pokemon.sprites.front_default}">
    </div>`;
  });

  renderFavorites.innerHTML = render.join("");
}

function addFavorites() {
  favoritePokemons.push(currentPokemon);

  console.log(favoritePokemons);
}

pokeInput.addEventListener("keydown", (e) => {});
searchPoke.addEventListener("click", getPokemon);
btnFavorites.addEventListener("click", showFavorites);
// <div>
//           <p>
//             Altura: ${data.height / 10}
//           </p>
//           <p>
//             Altura: ${data.weigth / 10}
//           </p>
//         </div>
