export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.generalForm();
    this.sortText();
    this.clearInput();
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

      if (Boolean(this.taskLi)) {
        this.view.ul.className = "list";
      }

      this.taskInput.addEventListener("keyup", (event) => {
        this.model.changeTask(index, event.target.value);
      });

      this.deleteButton.addEventListener("click", () => {
        this.model.DelElArr(index);

        if (this.model.arr == "") {
          this.view.ul.className = "ulDisplayOff";
        }
        this.render();
      });

      this.view.ul.appendChild(this.taskLi);
      this.taskLi.appendChild(this.taskInput);
      this.taskLi.appendChild(this.deleteButton);
    });
  }

  sortText() {
    this.view.iconButton.addEventListener("click", (e) => {
      if (e.target.className === "sort_button") {
        this.model.sortDirect();
      } else {
        this.model.sortInverse();
      }
      this.render();
      this.view.iconButton.classList.toggle("sort_button_reverse");
    });
  }

  clearInput() {
    this.view.clearInputValue.addEventListener("click", () => {
      this.view.label_input.value = "";
    });
  }
}
