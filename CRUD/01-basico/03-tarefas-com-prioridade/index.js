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

  taskName.value = "";
  console.log(taskList);
}

btnTask.addEventListener("click", addTask);
