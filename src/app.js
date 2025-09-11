const tasks = []

const taskInput = document.getElementById("task-input")
const addButton = document.getElementById("add-button")
const taskList = document.getElementById("task-list")

function createTaskElement(taskText){
    const li = document.createElement("li")
    li.textContent = taskText
    return li
}

function renderTasks(){
    taskList.innerHTML = ''
    tasks.forEach(task => {
        const taskEl = createTaskElement(task)
        taskList.appendChild(taskEl)
    })
}

function addTask(){
    const text = taskInput.value.trim()
    if (text === '') return

    tasks.push(text)
    taskInput.value = ''
    renderTasks()
}

addButton.addEventListener('click', addTask)
taskInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        addTask()
    }
})

renderTasks();