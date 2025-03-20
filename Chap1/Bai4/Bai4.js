//bai4: arrow function
function test() {
  console.log(">>> test");
}
test();

test1 = () => {
  console.log(">>> test1");
};
test1();

test2 = () => console.log(">>> test2");
test2();

hello = (value) => console.log(">>> hello: ", value);
hello("Quang Anh");

const hello1 = () => "Hello World!";
console.log(hello1());
