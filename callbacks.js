let first = 2;
let second = 3;
let third = 4 ;

let sumTwo = function (x, z){
    let result = x + z;
    return result;
}

let multipyTwo = function (x, z){
    let result = x * z;
    return result;
}

let sumFour = function (item_1, item_2, item_3=0, callback) {
    let result = callback(item_1, item_2);    // callback function
    let backtick = `callback result : ${result}`
    console.log(backtick);

    result = item_1 + item_2 + item_3;
    return result;
}

console.log(sumFour(first, second, third, multipyTwo));
console.log(sumFour(first, second, third, sumTwo));

//