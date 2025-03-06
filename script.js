const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");

// নতুন টাস্ক যোগ করা
addTaskBtn.addEventListener("click", () => {
  const input = prompt("Enter a Task");
  if (!input) return;

  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  taskCard.textContent = input;
  taskCard.setAttribute("draggable", true);

  // Drag & Drop Event যোগ করা
  taskCard.addEventListener("dragstart", () => {
    taskCard.classList.add("moving");
  });
  taskCard.addEventListener("dragend", () => {
    taskCard.classList.remove("moving");
  });

  // টাস্কটি "Confirmed" বোর্ডের card div-তে যোগ করা
  const todoCard = todoBoard.querySelector(".card");
  todoCard.appendChild(taskCard);
});

// সকল বোর্ডের জন্য Drag & Drop ইভেন্ট
const allBoard = document.querySelectorAll(".board");

allBoard.forEach((board) => {
  board.addEventListener("dragover", (event) => {
    event.preventDefault(); // Default behavior বন্ধ করা
    const movingItem = document.querySelector(".moving");
    if (movingItem) {
      board.querySelector(".card").appendChild(movingItem);
    }
  });
});
