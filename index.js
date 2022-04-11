import Controller from "./Controller/controller.js";
import Model from "./Model/model.js";
import View from "./View/view.js"

const init = () => {
    const view = new View();
    const model = new Model();
    const controller = new Controller();

    controller.init();
};

init();