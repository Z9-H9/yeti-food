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

  const deleteButton = document.createElement("Button id='deleteButton'")

  deleteButton.textContent = "Delete"
  
  taskList.appendChild(li);

  taskInput.value = "";
}
                          
                          
                          
                          
  );
