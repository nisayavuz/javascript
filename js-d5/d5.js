//comparison operators
//x == y değerin aynı olup olmadığına bakar
//x === y hem değerin hem de veri türünün eşit olup olmadığına bakar
// x != y  not equal

console.log("mango".length == "avocado".length) // false
console.log("mango".length < "avocado".length) // true
// As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==.

let check = 4<5 && 5<6 // true (and operator)
console.log(check);

let check2 = 4>3 || 5<2 // true. (or operator.)

let isLightOn = true
let isLightOff = !isLightOn // false (negation)

//ternary operator 
let result = 5>4 ? "evet" : "hayir"
console.log(result);

/****** Window Methods *******/
alert("welcome to my page")
// Do not use too much alert because it is destructing and annoying, use it just to test.

let deger = prompt("bir değer giriniz: ") // kullanıcıdan veri almak için kullanılır.
console.log( deger * 5)

const agree = confirm("emin misin?") // onay kutusu, tamam'a basılırsa true, iptal'e basılırsa false döner. 

//date objects
const date = new Date() // new date'i başlatmayı sagliyor
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // getMonth 0-11 arasi değer verdiği için +1 ile doğru sonuca ulaştık.
console.log(date.getDate());
