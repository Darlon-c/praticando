const firstName = document.getElementById("firstName");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const passwordConfirm = document.getElementById("passwordConfirm");
const btnRegister = document.getElementById("btnRegister");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");

let users = [];

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
  } else if (passwordRegister.value <= 8) {
    alert("A senha deve conter no mínimo 8 digitos");
    return;
  } else if (passwordConfirm.value !== passwordRegister.value) {
    alert("As senhas não são iguais");
    return;
  }

  const existsEmail = users.some(user => user.email === emailRegister.value)

  if(existsEmail){
    alert("Este email já está cadastrado!");
    return;
  }
}

function registerUser() {
    let user = {
        name: firstName.value,
        
    }
}

btnRegister.addEventListener("click", newUser);
