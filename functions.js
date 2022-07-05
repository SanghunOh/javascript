// y = x + 1
// x = "str" --> y = "str1"
// x = 2 --> y = 3

function sum(x)
{
    let y = x + 1;
    return y;
}


function muliply(x)
{
    let y = x * 1;
    return y;
}

sum(5);
muliply(6);

// y = x + z
// console.log(sumTwo(5, 7)); // wrong
let result = sumTwo(5, 7);

// hoisting
function sumTwo(x, z){
    let result = x + z;
    return result;
}


// let print = "sumTwo : " + result;
let print = `sumTwo : ${result}`;
console.log(print);

// declarate 3 ways for function
// normal
function sumTwo(x, z){
    let result = x + z;
    return result;
}

// anonymous functiion
let name = "mello";

let sumTwoAnonymous = function (x, z){
    let result = x + z;
    return result;
}

// sum function that 3th number type variables 
// use params with variables
// result by variable and then print with back tick
{
    // result = item_1 + item_2 + item_3;
}

function sumThree(item_1, item_2, item_3) {
    let result = item_1 + item_2 + item_3;
    return result;
}

let first = 2;
let second = 3;
let third = 4 ;
result = sumThree(first,second, third);
let backtick = `sumThree() function : ${result}`;
console.log(backtick);

// arrow function
let sumTwoArrow = (x, z) => {
    let result = x + z;
    return result;
}

sumThree(first, second);

function sumFour(item_1, item_2, item_3=0) {
    let result = sumTwo(item_1, item_2);
    let backtick = `sumTwo : ${result}`
    console.log(backtick);

    result = item_1 + item_2 + item_3;
    return result;
}

console.log(sumFour(first, second));
