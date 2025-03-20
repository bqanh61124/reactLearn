// bai 3: object, array
const person = {
  firstName: "Quang Anh",
  lastName: "Bui",
  age: 21,
  eyeColor: "brown",
};
//array
const person2 = ["Quang Anh", "Bui", 21, "brown"];
// tên thuộc tính có dấu cách thì cần nháy đôi
console.log(">>>check age: ", person.age);
console.log(">>>check eye color: ", person["eyeColor"]);
console.log(">>>check age: ", person2[2]);

const React = {
  "language name": "JavaScript",
  author: "facebook",
};
console.log(">>>check language: ", React["language name"]);
console.log(">>>check author: ", React.author);

let tutorial = {
  name: "React Tutorial",
  author: "HoiDanIT vs Eric",
  language: "javascript",
};
alert(tutorial.name + " was created by " + tutorial.author);
