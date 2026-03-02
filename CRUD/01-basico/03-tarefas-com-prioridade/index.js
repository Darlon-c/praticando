const taskName = document.getElementById("taskName");
const priority = document.getElementById("priority");
const btnTask = document.getElementById("btnTask");
const resultTasks = document.getElementById("resultTasks");

let taskList = [];
let idCount = 1;

function addTask() {
  if (taskName.value === "") {
    alert("Informe qual será a tarefa!");
    return;
  }

  const task = {
    id: idCount,
    title: taskName.value,
    priority: priority.value,
    completed: false,
  };

  taskList.push(task);
  idCount++;

  rendertask();
  taskName.value = "";
  console.log(taskList);
}

function rendertask() {
  const showTask = taskList.map((task) => {
    return `
            <div class="flex">
                <p>${task.title} | 
                    Prioridade: ${task.priority} 
                   
                </p>
                <button onclick="changePriority(${task.id})">Mudar prioridade</button>
                <button onclick="editTitle(${task.id})">Editar título</button>
                <button onclick="removeTask(${task.id})">Remover</button>
                
            </div>
        `;
  });

  resultTasks.innerHTML = showTask.join("");
}


function removeTask(id) {
    taskList = taskList.filter((task) => {
        return task.id !== id
    })

    rendertask()
}

btnTask.addEventListener("click", addTask);
