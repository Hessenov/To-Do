export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.generalForm();
    this.clearInput();
    this.buttonSortTask();
  }

  generalForm() {
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(e.target);
      const inputValue = data.get("label_data");

      if (inputValue !== "") {
        this.model.addArray(inputValue);
        this.view.label_input.value = "";
      }
      this.render();
    });
  }

  render() {
    this.view.ul.innerHTML = "";

    this.model.arr.forEach((el, index) => {
      this.taskLi = this.view.createLi({
        class: "taskDiv",
      });

      this.taskInput = this.view.createInput({
        class: "taskInput",
        name: "taksInput",
        value: el,
      });

      this.deleteButton = this.view.createButton({
        type: "button",
        class: "deleteButton",
      });

      this.deleteButton.addEventListener("click", () => {
        this.model.deletTask(index);
        this.render();
        if (this.view.ul.innerHTML === "") {
          this.view.ul.className = "";
        }
      });

      this.view.ul.appendChild(this.taskLi);
      this.taskLi.appendChild(this.taskInput);
      this.taskLi.appendChild(this.deleteButton);
    });
  }

  buttonSortTask() {
    this.view.iconButton.addEventListener("click", (e) => {
      if (e.target.className === "button-sort sort-reverse") {
        this.model.sortTasksReverse();
      } else {
        this.model.sortTasks();
      }
      this.render();
      e.target.classList.toggle("sort-reverse");
    });
  }

  clearInput() {
    this.view.clearInputValue.addEventListener("click", () => {
      this.view.label_input.value = "";
    });
  }
}
