//comparison operators
x == y // değerin aynı olup olmadığına bakar
x === y // hem değerin hem de veri türünün eşit olup olmadığına bakar
x != y // not equal

console.log("mango".length == "avocado".length) // false
console.log("mango".length < "avocado".length) // true
// As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==.

let check = 4<5 && 5<6 // true (and operator)
console.log(check);

let check2 = 4>3 || 5<2 // true. (or operator.)

let isLightOn = true
let isLightOff = !isLightOn // false (negation)
