// while
let count = 0;
// while (true) {
// let condision = count > 100;
// while (count > 100) {
//     console.log('in while : '+count);
//     count = count + 1;
// }

// for
// for (let count = 0; count < 5; count = count + 1) {
//     console.log("in for with count : "+count);
// }

let fruits = ["apple", "banana", "orange"] ;
// for (let index = 0; index <= 2; index ++) {
//     console.log("in for with fruits : "+fruits[index]);
//     let fruit = fruits[index];
//     console.log("fruit : "+fruit);
// }

// iteral
// for (let fruit of fruits) {
//     console.log("fruit : " + fruit);
// }

let animals = ["tiger", "lion"];
for (let animal of animals) {
    console.log("animals : " + animal);
}

let mixins = ["apple", false, "banana", 4, "orange", ["tiger", "lion"]] ;
for (let mixin of mixins) {
    console.log("mixins : " + mixin);
    // console.log(!(((typeof mixin) == 'number') || ((typeof mixin) == 'string') || ((typeof mixin) == 'boolean'))
    // )

    let condition = !(((typeof mixin) == 'number') || ((typeof mixin) == 'string') || ((typeof mixin) == 'boolean'));
    if (condition) {
        for (let animal of mixin) {
            console.log("animals : " + animal);
        }
    }
}

console.log("progrma end !");
