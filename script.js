const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  li.textContent = taskText;

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {

    li.remove();
  });

  li.appendChild(deleteButton);
  
  taskList.appendChild(li);

  taskInput.value = "";



});
