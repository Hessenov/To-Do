export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  controller_init() {
    this.view.view_init();
    this.view.mainButton.addEventListener("click", () => {
      
    });
  }
}
