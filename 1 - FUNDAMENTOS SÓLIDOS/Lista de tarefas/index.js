const btn = document.getElementById("addTask");
const inputText = document.getElementById("textInput");
const ul = document.getElementById("boxTask");

let tasks = [];

function addNewTask() {
  if (inputText.value === "") {
    alert("Campo vazio, digite sua tarefa");
    return;
  }

  const newTask = {
    id: Date.now(),
    texto: inputText.value,
    concluida: false,
  };

  tasks.push(newTask);
  inputText.value = "";
  showTask();
}

function showTask() {
  ul.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");
    li.className =
      "flex items-center justify-between gap-2 p-3 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow";

    li.innerHTML = `
    <span class="flex-1 break-words">${task.texto}</span>
    
  <button data-id="${task.id}" 
        class="btn-conclude shrink-0 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
          task.concluida
            ? "bg-green-100 text-green-700 border border-green-200"
            : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-green-50 hover:text-green-700 hover:border-green-300"
        }">
    <span class="flex items-center gap-1.5">
        ${
          task.concluida
            ? '<i class="fa-solid fa-check text-xs"></i> Concluído'
            : '<i class="fa-regular fa-circle text-xs"></i> Concluir'
        }
    </span>
</button>

<button data-id="${task.id}" 
        class="btn-remove shrink-0 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-50 text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-colors duration-150">
    <span class="flex items-center gap-1.5">
        <i class="fa-solid fa-trash text-xs"></i>
        <span class="hidden sm:inline">Remover</span>
    </span>
</button>
    
`;
    ul.appendChild(li);
  }
}

ul.addEventListener("click", function (e) {
  const button = e.target.closest("button");
  if (!button) return;

  const taskId = Number(button.dataset.id);

  if (button.classList.contains("btn-conclude")) {
    concludeTask(taskId);
  } else if (button.classList.contains("btn-remove")) {
    removeTask(taskId);
  }
});

function concludeTask(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].concluida = !tasks[taskIndex].concluida;
    showTask();
  }
}

function removeTask(idBtn) {
  tasks = tasks.filter((task) => task.id !== idBtn);
  showTask();
}

btn.addEventListener("click", addNewTask);
