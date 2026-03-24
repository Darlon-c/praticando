const firstName = document.getElementById("firstName");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const passwordConfirm = document.getElementById("passwordConfirm");
const btnRegister = document.getElementById("btnRegister");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");
const logoutBtn = document.getElementById("logoutBtn");

let users = [];
let idCount = 1;

function loadStorage() {
  const data = localStorage.getItem("user");

  if (data) {
    users = JSON.parse(data);
    if (users.length > 0) {
      idCount = Math.max(...users.map((u) => u.id)) + 1;
    }
  }
}

loadStorage();

function newUser(e) {
  e.preventDefault();
  if (firstName.value === "") {
    alert("Por favor informe seu nome!");
    return;
  } else if (
    !emailRegister.value.includes("@") ||
    !emailRegister.value.includes(".")
  ) {
    alert("Por favor informe um email válido!");
    return;
  } else if (passwordRegister.value.length < 8) {
    alert("A senha deve conter no mínimo 8 digitos");
    return;
  } else if (passwordConfirm.value !== passwordRegister.value) {
    alert("As senhas não são iguais");
    return;
  }

  const existsEmail = users.some((user) => user.email === emailRegister.value);

  if (existsEmail) {
    alert("Este email já está cadastrado!");
    return;
  }

  registerUser();

  window.location.href = "login.html";
}

function registerUser() {
  let user = {
    id: idCount,
    name: firstName.value,
    email: emailRegister.value,
    password: passwordRegister.value,
  };

  users.push(user);
  saveStorage();

  idCount++;
  emailRegister.value = "";
  firstName.value = "";
  passwordRegister.value = "";
  passwordConfirm.value = "";
  console.log(users);
}

function saveStorage() {
  localStorage.setItem("user", JSON.stringify(users));
}

// Parte do login

function loginUser(e) {
  e.preventDefault();

  const email = emailLogin.value;
  const password = passwordLogin.value;

  const userLogin = users.find((u) => u.email === email);

  if (!userLogin) {
    alert("Email não cadastrado!");
    return;
  }

  if (userLogin.password !== password) {
    alert("Senha incorreta!");
    return;
  }

  alert(`Bem-vindo, ${userLogin.name}!`);

  const loggedUser = {
    id: userLogin.id,
    name: userLogin.name,
    email: userLogin.email,
  };
  localStorage.setItem("userLogin", JSON.stringify(loggedUser));
  window.location.href = "index.html";
}

// Tela inicial

function showUserName() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const userNameSpan = document.getElementById("userName");

  if (userNameSpan && userLogin) {
    userNameSpan.textContent = userLogin.name;
  }
}

function logout() {
  localStorage.removeItem("userLogin");
  window.location.href = "login.html";
}

function checkLogin() {
  const userLogin = localStorage.getItem("userLogin");

  const currentPage = window.location.pathname;

  if (currentPage.includes("login.html")) return;

  if (!userLogin) {
    window.location.href = "login.html";
  }
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}

if (btnRegister) {
  btnRegister.addEventListener("click", newUser);
}

if (btnLogin) {
  btnLogin.addEventListener("click", loginUser);
}
showUserName();
checkLogin();
