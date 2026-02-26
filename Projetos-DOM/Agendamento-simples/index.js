const list = document.getElementById("list");
const toSchedule = document.getElementById("toSchedule");

let appointments = [];
let idCount = 1;

function newSchedule() {
  const textInput = document.getElementById("textName");
  const hourInput = document.getElementById("hour");
  const dateInput = document.getElementById("inputDate");

  const name = textInput.value;
  const hour = hourInput.value;
  const date = dateInput.value;

  if (!name || !hour || !date) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const scheduling = {
    id: idCount,
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
}

function renderSchedule() {
  const showAppointments = appointments.map((scheduling) => {
    return `<div>${scheduling.name} - ${scheduling.date} - ${scheduling.hour}</div>`;
  });

  list.innerHTML = showAppointments.join("");
}

toSchedule.addEventListener("click", newSchedule);
