// BEGIN PART 2
const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
// END PART 2

// BEGIN PART 3

let count = 0;

addButton.addEventListener("click", () => {
  count += 1;
  countDisplay.innerHTML = count;
});
subtractButton.addEventListener("click", () => {
  count -= 1;
  countDisplay.innerHTML = count;
});


// END PART 3

// BEGIN PART 5

const taskName = document.getElementById("task-name");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const taskList = document.getElementById("tasks");

// END PART 5

// BEGIN PART 6

submitButton.addEventListener("click", () => {
  if (taskName.value != "") {
    const task = document.createElement("li");
    task.innerHTML = taskName.value;
    taskList.appendChild(task);
  }
});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  taskName.value = "";
});

// END PART 6

taskName.addEventListener("input", () => {
  if (taskName.value == "Cal Hacks") {
    countDisplay.style.color = "steelblue";
  }else{
    countDisplay.style.color = "black";
  }
  
});
