
function addTask() {
  const taskInput = document.getElementById("text");
  const deadlineInput = document.getElementById("deadline");
  const priorityInput = document.getElementById("prior");

  const taskTitle = taskInput.value;
  const deadline = deadlineInput.value;
  const priority = priorityInput.value;

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("div");
  newTask.classList.add("task");

  newTask.innerHTML = `
  <span class="task-t">${taskTitle} </span> |
   <span class="task-p"> Priority: ${priority}</span> |
      <span class="task-d">Deadline: ${deadline}</span> | 
      <button class="delete-button" onclick="deleteTask(this)"> <img src="img/del2.png"></button>
      `;
  taskList.appendChild(newTask);

  // Clear input fields
  taskInput.value = "";
  deadlineInput.value = "";
  priorityInput.value = "High Priority";
}

function deleteTask(button) {
  const taskList = document.getElementById("taskList");
  const task = button.parentNode;
  taskList.removeChild(task);
}

