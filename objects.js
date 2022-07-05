["apple", "banana", "orange", "mellon"];

apple = "apple";
// object 순서 없음
// {apple : "apple", banana : "banana", orange: "orange", mellon : "apples"}
let name = "George";
let species = "gorilla";
let foodsEaten = ["apple", "banana", "orange"];


// let sumTwoAnonymous = function (x, z){
//     let result = x + z;
//     return result;
// }

let monkey = {
    name : "George",
    species : "gorilla",
    foodsEaten : ["apple", "banana", "orange"],
    sumTwoAnonymous : function (x, z){
            let result = x + z;
            return result;
        }
}

monkey.name
monkey.foodsEaten
