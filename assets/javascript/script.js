//instantiate DOM elements
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//function - Add Task on Button Click
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);


