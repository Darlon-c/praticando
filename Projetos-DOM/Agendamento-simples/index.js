const list = document.getElementById("list");
const toSchedule = document.getElementById("toSchedule");

let appointments = [];
let idCount = 1;

function newSchedule() {
  const textInput = document.getElementById("textName");
  const hourInput = document.getElementById("hour");
  const dateInput = document.getElementById("inputDate");
  const carInput = document.getElementById("carInput");

  const name = textInput.value;
  const hour = hourInput.value;
  const date = dateInput.value;
  const car = carInput.value;

  if (!name || !hour || !date) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const scheduling = {
    id: idCount,
    car: car,
    name: name,
    hour: hour,
    date: date,
  };

  appointments.push(scheduling);
  idCount++;
  renderSchedule();
  console.log(appointments);

  textInput.value = "";
  hourInput.value = "";
  dateInput.value = "";
  carInput.value = "";
}

function renderSchedule() {
  const showAppointments = appointments.map((scheduling) => {
    return `<div class="border px-5 py-5">
    <p>Carro: ${scheduling.car}</p><br>
    <p>Cliente: ${scheduling.name}</p><br>  
    <p>Data: ${scheduling.date}</p><br>  
    <p>Horario: ${scheduling.hour}</p></div>`;
  });

  list.innerHTML = showAppointments.join("");
}

toSchedule.addEventListener("click", newSchedule);
