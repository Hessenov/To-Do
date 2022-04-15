export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.generalForm();
  }

  generalForm() {
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(e.target);
      const inputValue = data.get("label_data");
      this.model.addArray(inputValue);
      if (inputValue!==""){
        this.view.label_input.value = ""
      }
      this.render();
    });
  }

  render() {
    this.view.ul.innerHTML ="";

    this.model.arr.forEach((el) => {
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
      })

      this.

      this.view.ul.appendChild(this.taskLi);
      this.taskLi.appendChild(this.taskInput);
      this.taskLi.appendChild(this.deleteButton)
    });
  }
}
