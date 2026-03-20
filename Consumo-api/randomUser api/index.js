const result = document.getElementById("result");
const btn = document.getElementById("btnUser");
const favoriteUser = document.getElementById("favoriteUser");
const userDiv = document.getElementById("userDiv");

let favorite = [];
let currentUser = null;

function loadStorage() {
  const saveData = localStorage.getItem("user");

  if (saveData) {
    favorite = JSON.parse(saveData);
  }
}

async function getUser() {
  try {
    const response = await fetch("https://randomuser.me/api/?nat=br");
    const data = await response.json();

    const user = data.results[0];
    currentUser = user;

    const date = new Date(user.dob.date).toLocaleDateString("pt-BR");

    result.innerHTML = `
        <div>
            <img src="${user.picture.large}">
            <h3>Nome completo: ${user.name.first} ${user.name.last}</h3>
            <h3>Idade: ${user.dob.age}</h3>
            <h3>Data de nascimento: ${date}</h3>
            <h3>Celular: ${user.cell}</h3>
            <h3>CPF: ${user.id.value}</h3>
            <h3>Endereço: ${user.location.street.name} Nº${user.location.street.number} ${user.location.city}</h3>
            <button class="border bg-emerald-300" onclick="bestUsers()">Favoritar</button>
        </div>
    `;
    saveStorage();
  } catch (error) {
    console.log(error);
  }
}

function bestUsers() {
  favorite.push(currentUser);
  saveStorage();
  console.log(favorite);
}

function showFavoriteUser() {
  if (favorite.length === 0) {
    userDiv.innerHTML = "<p>Nenhum usuário favoritado ainda.</p>";
    return;
  }

  const render = favorite.map((user) => {
    return `
        <div>
            <img src="${user.picture.large}">
            <h3>Nome completo: ${user.name.first} ${user.name.last}</h3>
            <h3>Idade: ${user.dob.age}</h3>
            <h3>Data de nascimento: ${user.dob.date}</h3>
            <h3>Celular: ${user.cell}</h3>
            <h3>CPF: ${user.id.value}</h3>
            <h3>Endereço: ${user.location.street.name} Nº${user.location.street.number} ${user.location.city}</h3>
            <button class="border bg-red-600" onclick="removeFavorite('${user.login.uuid}')">Remover</button>
        </div>
    `;
  });

  userDiv.innerHTML = "";
  userDiv.innerHTML = render.join("");
}

function removeFavorite(uuid) {
  favorite = favorite.filter((user) => {
    return user.login.uuid !== uuid;
  });

  showFavoriteUser();
  saveStorage();
}

function saveStorage() {
  localStorage.setItem("user", JSON.stringify(favorite));
}

loadStorage();
btn.addEventListener("click", getUser);
favoriteUser.addEventListener("click", showFavoriteUser);
