const topDate = document.querySelector("#date");
const topMonth = document.querySelector("#month");
const taskLenght = document.querySelector("#task_lenght");
const inputContainer = document.querySelector("#input_container");
const todoList = document.getElementsByClassName("todo");
const addTodo = document.querySelector("#addToDos");
const wrapper = document.querySelector("#wrapper");

//document.querySelector("input").focus()
class App {
  #Todos = [];
  date = new Date();
  //getting local storage todo items
  #localStorag = JSON.parse(localStorage.getItem("todos"));

  // prettier-ignore
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {
    //local todo item === Todos once the page load
    this.#Todos = this.#localStorag;

    this.renderDate();
    this.renderLocalTodo();
    document
      .querySelector("body")
      .addEventListener("click", this.renderInput.bind(this));
  }
  //date function
  renderDate() {
    const day = new Date();
    const date = new Intl.DateTimeFormat(navigator.language, {
      weekday: "long",
      day: "2-digit",
    })
      .format(day)
      .split(" ")
      .reverse()
      .join(", ");
    topDate.textContent = date;
    topMonth.textContent = this.months[day.getMonth()];
  }
  // input fuction onClick
  renderInput(e) {
    if (e.target.classList.contains("addToDos")) {
      inputContainer.classList.toggle("flex");
      inputContainer.classList.toggle("hidden");
    }
    //delete a todo in the list
    this.deletATodo(e);
    //add a todo
    this.renderTodo(e);

    // add a line throug a todo list onClick
    this.lineThrough(e);
  }
  //delete a todo in the list function and also delete todo in the loca storage
  deletATodo(e) {
    if (e.target.classList.contains("fa-solid")) {
      const aTodo = e.target.previousElementSibling.textContent;
      const indexOf = this.#Todos.findIndex((value) => value === aTodo);
      this.#Todos.splice(indexOf, 1);
      e.target.parentElement.remove();
      taskLenght.textContent = `${todoList.length} task`;
      this.setLocal();
    }
  }
  //add todo in the list function
  renderTodo(e) {
    if (e.target.classList.contains("input")) {
      e.target.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          if (e.target.value === "") return;
          this.renderAddTodo(e.target.value);
          this.#Todos.push(e.target.value);
          this.setLocal();
          //inputContainer.classList.toggle("hidden");
          e.target.value = "";
        }
      });
    }
  }

  // line through function
  lineThrough(e) {
    if (e.target.closest(".todo")) {
      e.target.classList.add("line-through");
    }
  }

  // show added todos in the browser
  renderAddTodo(val) {
    const html = ` <div
    class="flex justify-between items-center mt-6 mb-6 text-gray-700 text-xl relative"
    >
    <h3 class="todo">${val}</h3>
    <i class="fa-solid fa-trash"></i>
    </div>`;
    wrapper.insertAdjacentHTML("beforeend", html);
    taskLenght.textContent = `${todoList.length} task`;
    return html;
  }

  // show saved todos from the local storage
  renderLocalTodo() {
    if (!this.#Todos) return;
    this.#Todos.forEach((data) => {
      this.renderAddTodo(data);
    });
  }

  // set a local storage for todos
  setLocal() {
    localStorage.setItem("todos", JSON.stringify(this.#Todos));
  }
  // reset/clear todos in the local storage
  resetLocal() {
    localStorage.clear();
  }
}
const app = new App();
