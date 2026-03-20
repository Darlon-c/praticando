const result = document.getElementById("result");
const btn = document.getElementById("btnUser");
const favoriteUser = document.getElementById("favoriteUser");
const userDiv = document.getElementById("userDiv");

let favorite = [];
let currentUser = null

async function getUser() {
  try {
    const response = await fetch("https://randomuser.me/api/?nat=br");
    const data = await response.json();

    const user = data.results[0];
    currentUser = user

    console.log(user);

    result.innerHTML = `
        <div>
            <h3>Nome completo: ${user.name.first} ${user.name.last}</h3>
            <h3>Idade: ${user.dob.age}</h3>
            <h3>Data de nascimento: ${user.dob.date}</h3>
            <h3>Celular: ${user.cell}</h3>
            <h3>CPF: ${user.id.value}</h3>
            <h3>Endereço: ${user.location.street.name} Nº${user.location.street.number} ${user.location.city}</h3>
            <img src="${user.picture.large}">
            <button class="border bg-emerald-300" onclick="bestUsers()">Favoritar</button<
        </div>
    `;
  } catch (error) {
    console.log(error);
  }
}

function bestUsers() {
    favorite.push(currentUser)
    console.log(favorite)
}

function showFavoriteUser() {
    const render = favorite.map((user) => {
        return `
        <div>
            <h3>Nome completo: ${user.name.first} ${user.name.last}</h3>
            <h3>Idade: ${user.dob.age}</h3>
            <h3>Data de nascimento: ${user.dob.date}</h3>
            <h3>Celular: ${user.cell}</h3>
            <h3>CPF: ${user.id.value}</h3>
            <h3>Endereço: ${user.location.street.name} Nº${user.location.street.number} ${user.location.city}</h3>
            <img src="${user.picture.large}">
           
        </div>
    `;
    })

    userDiv.innerHTML = render.join("")
}

btn.addEventListener("click", getUser);
favoriteUser.addEventListener("click", showFavoriteUser)
