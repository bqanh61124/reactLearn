class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getAddress() {
    return "I live in " + this.address;
  }
}

const test = new Person("Quang Anh", "Hanoi");
console.log(" >>> check info: ", test.name); // >>> check info:  Quang Anh
console.log(" >>> check address: ", test.getAddress());

class Novel {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getAuthor() {
    return "The author of this novel is " + this.author;
  }
  getName() {
    return "The name of this novel is " + this.title;
  }
}
let myNovel = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh");
console.log(myNovel.getName() + ". " + myNovel.getAuthor());
