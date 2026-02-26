// document.getElementById("toggleTheme").addEventListener("click", () => {
//   document.body.classList.toggle("bg-slate-900");
//   document.body.classList.toggle("text-white");
// });

const list = document.getElementById("list");
const toSchedule = document.getElementById("toSchedule");

let appointments = JSON.parse(localStorage.getItem("testdrive_data")) || [];
let idCount =
  appointments.length > 0 ? Math.max(...appointments.map((a) => a.id)) + 1 : 1;

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
    Swal.fire("Por favor, preencha todos os campos!");
    return;
  }

  const now = new Date();
  const selectedDate = new Date(date + "T" + hour);
  if (selectedDate < now) {
    Swal.fire("Não pode agendar para o passado!");
    return;
  }

  const conflict = appointments.find(
    (item) => item.date === date && item.hour === hour && item.car === car,
  );

  if (conflict) {
    Swal.fire("Esse carro já está reservado nesse horário!");
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
  saveAndRender();
 
  textInput.value = "";
  hourInput.value = "";
  dateInput.value = "";
}

function renderSchedule() {
  appointments.sort((a, b) => {
    return new Date(a.date + "T" + a.hour) - new Date(b.date + "T" + b.hour);
  });

  const showAppointments = appointments.map((scheduling) => {
    const statusClass = scheduling.finish
      ? "bg-emerald-50 border-emerald-200 opacity-75"
      : "bg-white border-slate-100 shadow-sm";
    const btnStatusClass = scheduling.finish
      ? "bg-emerald-500 text-white"
      : "bg-slate-100 text-slate-600";
    const formattedDate = new Date(scheduling.date).toLocaleDateString(
      "pt-BR",
      { timeZone: "UTC" },
    );

    return `
    <div class="border-2 p-5 rounded-2xl transition-all relative ${statusClass}">
        <button onclick="removeAppointments(${scheduling.id})" class="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
            ✕
        </button>
        
        <div class="mb-4">
            <span class="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">Veículo</span>
            <h3 class="font-bold text-lg text-slate-800">${scheduling.car}</h3>
        </div>

        <div class="space-y-2 mb-6">
            <p class="text-sm flex items-center gap-2"><span class="text-slate-400">👤</span> <b>Cliente:</b> ${scheduling.name}</p>
            <p class="text-sm flex items-center gap-2"><span class="text-slate-400">📅</span> <b>Data:</b> ${formattedDate}</p>
            <p class="text-sm flex items-center gap-2"><span class="text-slate-400">⏰</span> <b>Horário:</b> ${scheduling.hour}</p>
        </div>

        <button onclick="testDone(${scheduling.id})" 
            class="w-full py-2 rounded-xl font-bold text-xs uppercase tracking-tighter transition-all hover:brightness-95 ${btnStatusClass}">
            ${scheduling.finish ? "✓ Teste Realizado" : "Marcar como feito"}
        </button>
    </div>`;
  });

  list.innerHTML = showAppointments.join("");
}

function saveAndRender() {
  localStorage.setItem("testdrive_data", JSON.stringify(appointments));
  renderSchedule();
}

function removeAppointments(id) {
  appointments = appointments.filter((item) => item.id !== id);
  saveAndRender();
  Swal.fire("Agendamento cancelado!");
}

function testDone(id) {
  const scheduling = appointments.find((item) => item.id === id);
  if (scheduling) {
    scheduling.finish = !scheduling.finish;
  }
  saveAndRender();
}

toSchedule.addEventListener("click", newSchedule);

renderSchedule();
