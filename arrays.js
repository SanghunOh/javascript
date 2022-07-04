// array is in order
let fruits = ["apple", "banana", "orange"] ;
// fruits[2]
fruits.push("grape");
fruits.pop();
fruits.splice(1,1)
fruits.includes("orange")
fruits.join(" and ")

console.log("")

let animals = ["tiger", "lion"];
let mixin = animals.concat(fruits)

let mixins = ["apple", false, "banana", 4, "orange", ["tiger", "lion"]] ;

// "end" --> ["e", "n", "d", "\0"];

console.log("program end !")
