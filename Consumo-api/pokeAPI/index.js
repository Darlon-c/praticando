const poke = document.getElementById("pokemons");
const pokeInput = document.getElementById("pokeInput");
const searchPoke = document.getElementById("searchPoke");

async function getPokemon() {
  const name = pokeInput.value.toLowerCase();

  if (!name) {
    poke.innerHTML = "Digite um nome";
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    poke.innerHTML = `
    <div class="flex justify-center flex-col">
        <h2 class="">Nome: <span class="font-mono text-indigo-600">${data.name}</span></h2>
        <p>${data.id}</p>
        <img class="max-w-40" src="${data.sprites.front_shiny}">
        <p>${data.item}</p>
    </div>
    `;
  } catch (err) {}
}

searchPoke.addEventListener("click", getPokemon);
