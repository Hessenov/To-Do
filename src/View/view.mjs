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

  createParagraph(props) {
    const p = document.createElement("p");

    props.text && (p.innerText = props.text);
    props.class && (p.className = props.class);
    props.id && (p.id = props.id);
    props.type && (p.type = props.type);

    return p;
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
    props.value && (input.value = props.value);

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

  createButtonCirclePlus(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.class && (div.className = props.class);
    props.id && (div.id = props.id);
    props.type && (div.type = props.type);

    return div;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerHTML = props.text);
    props.class && (li.className = props.class);

    return li;
  }

  init() {
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
    });

    this.paragraph = this.createParagraph({
      class: "paragraph",
      id: "paragraph",
      text: "To-do list",
    });

    this.iconButton = this.createButton({
      id: "sort_button",
      class: "sort_button",
      type: "button",
    });

    this.img = this.createImg({
      id: "sort_img",
      class: "sort_img button-sort",
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
      text: "Добавить",
      class: "mainbutton",
      id: "mainButton",
      type: "submit",
    });

    this.circlePlis = this.createButtonCirclePlus({
      text: "+",
      class: "circlePlus",
      id: "circlePlus",
    });

    this.clearInputValue = this.createButton({
      id: "clearInputValue",
      type: "button",
    });

    this.root.appendChild(this.mainDiv);
    this.mainDiv.appendChild(this.form);
    this.form.appendChild(this.colorDiv);
    this.form.appendChild(this.label);
    this.label.appendChild(this.paragraph);
    this.label.appendChild(this.iconButton);
    this.iconButton.appendChild(this.img);
    this.label.appendChild(this.label_input);
    this.label.appendChild(this.clearInputValue)
    this.form.appendChild(this.ul);
    this.form.appendChild(this.mainButton);
    this.mainButton.appendChild(this.circlePlis);
  }
}
