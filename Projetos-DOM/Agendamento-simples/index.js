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

  const now = new Date();
  const selectedDate = new Date(date + "T" + hour);
  if (selectedDate < now) {
    alert("Não pode agendar para o passado!");
    return;
  }

  const conflict = appointments.find(
    (item) => item.date === date && item.hour === hour && item.car === car,
  );

  if (conflict) {
    alert("Esse carro já está reservado nesse horário!");
    return;
  }

  const scheduling = {
    id: idCount,
    car: car,
    name: name,
    hour: hour,
    date: date,
    finish: false,
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
    const bgColor = scheduling.finish ? "bg-green-200" : "bg-white";
    const formattedDate = new Date(scheduling.date).toLocaleDateString("pt-BR");

    return `<div class="border px-5 py-5 rounded-lg">
    <p class="font-semibold">Carro: ${scheduling.car}</p>
    <p class="font-semibold">Cliente: ${scheduling.name}</p> 
    <p class="font-semibold">Data: ${formattedDate}</p>
    <p class="font-semibold">Horario: ${scheduling.hour}</p>
    <button onclick="testDone(${scheduling.id})" class="px-3 border ${bgColor} rounded-md hover:bg-slate-100">Teste feito</button>
    <button onclick="removeAppointments(${scheduling.id})" class="px-3 border rounded-md hover:bg-red-500">X</button>
    </div>`;
  });

  list.innerHTML = showAppointments.join("");
}

function removeAppointments(id) {
  appointments = appointments.filter((scheduling) => {
    return scheduling.id !== id;
  });

  renderSchedule();
  alert("Agendamento removido");
}

function testDone(id) {
  // Encontra o agendamento pelo ID
  const schedulings = appointments.find((item) => item.id === id);

  if (schedulings) {
    schedulings.finish = !schedulings.finish;

    if (schedulings.finish) {
      alert(`Agendamento #${id} marcado como concluído!`);
    } else {
      alert(`Agendamento #${id} reaberto!`);
    }
  }

  renderSchedule();
}

toSchedule.addEventListener("click", newSchedule);
