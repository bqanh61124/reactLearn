//map, filter
const input = [1, 2 , 3, 4, 5];
const  output = input.map((item) => {
    return item * 2;
});
const output2 = output.filter((item) => {
    return item >= 8;
});
console.log(output,output2);