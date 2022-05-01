export default class Model {
  constructor() {
    this.arr = [];
  }

  addArray(inputValue) {
    this.arr.push(inputValue);
  }

  DelElArr(DelEL) {
    this.arr = this.arr.filter((el, index) => index !== DelEL);
  }

  changeTask(index, newTask) {
    this.arr[index] = newTask;
  }

  sortDirect() {
    this.arr = this.arr.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? -1 : 1
    );
  }

  sortInverse() {
    this.arr = this.arr.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? 1 : -1
    );
  }
}
