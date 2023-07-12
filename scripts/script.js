const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
let tasks = [];

if(JSON.parse(localStorage.getItem("tasks")) !== null){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    paintTasks(tasks);
}

const addTask = (e) => {
    e.preventDefault();

    if(taskInput.value === ""){
        alert("Ingrese una tarea válida");
        return;
    }

    tasks.push(taskInput.value);
    localStorage.setItem("tasks",JSON.stringify(tasks));

    const containerNewItem = document.createElement("div");
    containerNewItem.classList.add("container-task-item");

    const newItem = document.createElement("li");
    newItem.innerHTML = taskInput.value;

    const completeButton = document.createElement("p");
    completeButton.innerHTML = "✔";
    completeButton.addEventListener("click", completeTask);

    const deleteButton = document.createElement("p");
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", deleteTask);

    containerNewItem.appendChild(newItem);
    containerNewItem.appendChild(deleteButton);
    containerNewItem.appendChild(completeButton);
    taskList.appendChild(containerNewItem);
    taskInput.value = "";
}   

addButton.addEventListener("click", addTask);

function completeTask(event){
    const taskItem = event.target.parentElement.childNodes[0];
    taskItem.classList.toggle("completed");
}

function deleteTask(event){
    const taskItem = event.target.parentElement;
    const indexTask = tasks.indexOf(taskItem.childNodes[0].innerHTML);
    tasks.splice(indexTask, 1);
    console.log(tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks));
    taskList.removeChild(taskItem);
}

function paintTasks(tasks){
    tasks.forEach((task) => {
        const containerNewItem = document.createElement("div");
        containerNewItem.classList.add("container-task-item");

        const newItem = document.createElement("li");
        newItem.innerHTML = task;

        const completeButton = document.createElement("p");
        completeButton.innerHTML = "✔";
        completeButton.addEventListener("click", completeTask);

        const deleteButton = document.createElement("p");
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener("click", deleteTask);

        containerNewItem.appendChild(newItem);
        containerNewItem.appendChild(deleteButton);
        containerNewItem.appendChild(completeButton);
        taskList.appendChild(containerNewItem);
    });
}




