//instantiate DOM elements
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//function - Add Task on Button Click
var createTaskHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']");
    console.dir(taskNameInput);
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hld task info and add to list item
    var taskINfoEl = document.createElement("div");
    //give it a class name
    taskINfoEl.className = "task-info"
    //add HTML content to div
    taskINfoEl.innerHTML = "<h3 class = 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskINfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
    console.log(event);


};

formEl.addEventListener("submit", createTaskHandler);


