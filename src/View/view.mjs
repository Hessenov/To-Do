export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }
  createDiv(props) {
    const div = document.createElement("div");

    props.class && (div.className = props.class);
    props.id && (div.id = props.id);
    props.text && (div.innerText = props.text);

    return div;
  }

  createForm(props) {
    const form = document.createElement("form");

    props.class && (form.className = props.class);
    props.id && (form.id = props.id);

    return form;
  }

  createLabel(props) {
    const label = document.createElement("label");

    props.class && (label.className = props.class);
    props.id && (label.id = props.id);
    props.text && (label.innerText = props.text);

    return label;
  }

  createImg(props) {
    const img = document.createElement("img");

    props.class && (img.className = props.class);
    props.id && (img.id = props.id);
    props.src && (img.src = props.src);

    return img;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.class && (input.className = props.class);
    props.id && (input.id = props.id);
    props.name && (input.name = props.name);

    return input;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.class && (ul.className = props.class);
    props.id && (ul.id = props.id);

    return ul;
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.id && (button.id = props.id);
    props.type && (button.type = props.type);

    return button;
  }

  view_init() {
    this.mainDiv = this.createDiv({
      class: "main_div",
      id: "main_div",
    });

    this.form = this.createForm({
      class: "form",
      id: "form",
    });

    this.colorDiv = this.createDiv({
      class: "color_div",
      id: "color_div",
    });

    this.label = this.createLabel({
      class: "label",
      id: "label",
      text: "To-do list",
    });

    this.iconButton = this.createButton({
      id: "sort_button",
      type: "button",
    });

    this.img = this.createImg({
      id: "sort_img",
      class: "sort_img",
      src: "/src/Assets/Images/sort_img.svg",
    });

    this.label_input = this.createInput({
      id: "input",
      class: "input",
      name: "label_data",
    });

    this.ul = this.createUl({
      id: "list",
      class: "list",
    });


    this.mainButton = this.createButton({
      text: "click",
      class: "main-button",
      id: "mainButton",
    });

    this.root.appendChild(this.mainDiv);
    this.mainDiv.appendChild(this.form);
    this.form.appendChild(this.colorDiv);
    this.form.appendChild(this.label);
    this.label.appendChild(this.iconButton);
    this.iconButton.appendChild(this.img);
    this.label.appendChild(this.label_input);
    this.form.appendChild(this.ul);
    this.form.appendChild(this.mainButton);
  }

  updateCounter(newText) {
    this.counterEl.innerText = newText;
  }
}
