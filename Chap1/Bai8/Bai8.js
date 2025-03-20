// Destructuring makes it easy to extract only what is needed.
// Destructuring giúp chúng ta lấy những cái chúng ta cần
// Destructuring = To destroy the structure of something
// Destructuring object
const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
const { age, name } = person;
console.log(name); //Eric
console.log(age); //26
//destructring object ko quan trong thu tu

//destructuring array
const city = [ 'ha noi', 'da nang', 'sai gon', 'ca mau'];
const [ hanoi, , , camau ] = city
//destructring array quan trong thu tu
console.log(camau);

const react = ['facebook', 'all-in-one', 'javascript'];
const [,,tech] = react;
console.log(tech);

const dev = { salary: 2000, tool : 'laptop', like: 'bugs' };
const {like} = dev;
console.log(like) //bugs