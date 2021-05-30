let input = document.getElementById("todo-input");
let button = document.getElementById("add-todo");
let todosDiv = document.getElementById("todos-div");


let todos = [];

button.addEventListener("click", () => {
  if(input.value.length > 0) {
    const todo = {
      task: input.value,
      date: new Date(),
      isCompleted: false,
    };
    input.value = "";
    todos.push(todo);
    renderTodos(todos); 
  }
});

function renderTodos(todosArray) { 
  let todosHTML = todosArray.map((todo, index) => {
    // let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(todo.date);
    // let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(todo.date);
    // let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(todo.date);
    return `
            <div class="${todo.isCompleted ? "bg-secondary" : "bg-primary"
            } rounded p-3 mb-2 text-white">
               ${index + 1}. ${todo.task}
               <span class="float-right d-flex align-items-center">
                    <button class="btn btn-success text-white btn-sm mr-2" onClick="completeHandler(${index})"><i class="fas fa-check"></i></button>
                    <button class="btn btn-danger text-white btn-sm mr-2" onClick="deleteHandler(${index})"><i class="fas fa-trash"></i></button>
                </span>
            </div>
            `;
  });

  todosDiv.innerHTML = "";
  if (todosArray.length === 0) {
    document.getElementById("todos-div").classList.remove("border");
  }else {
    document.getElementById("todos-div").classList.add("border");
  }
  todosDiv.innerHTML = todosHTML.join("");
}

function completeHandler(index) {
  todos[index].isCompleted = true;
  renderTodos(todos);
}

function deleteHandler(idx) {
  let newTodos = todos.filter((todo, index) => index != idx);
  todos = newTodos;
  renderTodos(todos);
}
