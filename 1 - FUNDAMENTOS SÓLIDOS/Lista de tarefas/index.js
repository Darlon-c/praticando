const btn = document.getElementById('addTask')
const inputText = document.getElementById('textInput')
const ul = document.getElementById('boxTask')

let tasks = []

function addNewTask() {

    if(inputText.value === '') {
        alert('Campo vazio, digite sua tarefa')
        return
    }

    const newTask = {
        id: Date.now(),
        texto: inputText.value,
        concluida: false
    }

    tasks.push(newTask)
    inputText.value = '';
    showTask()
}

function showTask() {
    ul.innerHTML = ''

    for(let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        
        const li = document.createElement('li')

        li.innerHTML = `${task.texto} <button data-id="${task.id}" class="px-2 border rounded bg-red-400 cursor-pointer hover:bg-red-500">X</button>`

        ul.appendChild(li)
    }
}


 ul.addEventListener('click', function (e) {
   
    if(e.target.matches('button')) {
        const idBtn = Number(e.target.dataset.id)
        removeTask(idBtn)
    }
  })


function removeTask(idBtn) {
    tasks = tasks.filter(task => task.id !== idBtn)
    showTask()

}


btn.addEventListener('click', addNewTask)






