//spread syntax: toan tu(...)
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const combined =[...numbersOne, ...numbersTwo];
const combined2 = [...numbersTwo,...numbersOne]
console.log(combined);
console.log(combined2);

//push item to array
let me =["Quang Anh", "Bui"];
me.push(21); //them vao cuoi arrray
console.log(me);
me.unshift("PTIT"); //them vao dau array
console.log(me);
console.log(me.shift()); //xoa phan tu dau array

//spread syntax: toan tu(...) cho object
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
   }
   const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
   }
   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
    console.log(myUpdatedVehicle);   
    //cai nao da co thi bi overwrite
// pass all key:value pairs from an object
    let objClone = { ...myUpdatedVehicle}; 
    console.log(objClone);

    const arrayOne = ['a', 'b', 'c'];
    const arrayTwo = [1, 2, 3];
    const arraysCombined = [...arrayOne, ...arrayTwo];
    console.log(arraysCombined);

    function sum(x, y, z) {
        return x + y + z;
       }
       const numbers = [1, 2, 3];
       console.log(sum( ...numbers));