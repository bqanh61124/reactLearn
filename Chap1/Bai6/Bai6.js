//template literals-backticks: dùng cho string khi trong string có nháy đôi và nháy đơn
let text = `he's often called "Quang Anh"`;
console.log(text);

//dùng backticks cho string có nhiều dòng
//chỗ nào cần truyền biến thì dùng ${}
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

const base_url = `localhost:8080`;
const api = `get-user`; 
fetch_page = 2;
console.log(`${base_url}/${api}?page=${fetch_page}`);